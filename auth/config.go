package auth

import (
	"context"
	"fmt"
	"os"
	"time"

	"github.com/coreos/go-oidc/v3/oidc"
	"github.com/ghodss/yaml"
	"github.com/pkg/errors"
	"github.com/stackrox/infra-auth-lib/config"
	"golang.org/x/oauth2"
)

func providerFromDiscovery(issuer string) (*oidc.Provider, error) {
	provider, err := oidc.NewProvider(context.Background(), issuer)
	if err != nil {
		return nil, errors.Wrap(err, "could not create OIDC provider")
	}

	return provider, nil
}

func providerFromConfig(cfg *config.AuthOidcConfig) *oidc.Provider {
	providerConfig := oidc.ProviderConfig{
		IssuerURL:   cfg.IssuerURL,
		AuthURL:     cfg.AuthURL,
		TokenURL:    cfg.TokenURL,
		UserInfoURL: cfg.UserInfoURL,
		JWKSURL:     cfg.JWKSURL,
		Algorithms:  cfg.Algorithms,
	}

	return providerConfig.NewProvider(context.Background())
}

// NewFromConfig reads and parses the given OIDC configuration file.
func NewFromConfig(oidcConfigFile string) (*OidcAuth, error) {
	cfgData, err := os.ReadFile(oidcConfigFile)
	if err != nil {
		return nil, errors.Wrap(err, "could not read oidc config")
	}

	var cfg config.AuthOidcConfig
	if err = yaml.Unmarshal(cfgData, &cfg); err != nil {
		return nil, errors.Wrap(err, "could not unmarshal oidc config")
	}

	var provider *oidc.Provider
	if cfg.OfflineProviderConfig {
		provider = providerFromConfig(&cfg)
	} else {
		provider, err = providerFromDiscovery(cfg.IssuerURL)
		if err != nil {
			return nil, err
		}
	}

	config.AllowedEmailSuffix = cfg.AllowedEmailSuffix
	config.EmailBlockList = map[string]bool{}

	for _, email := range cfg.EmailBlockList {
		config.EmailBlockList[email] = true
	}

	return &OidcAuth{
		endpoint:  cfg.Endpoint,
		provider:  provider,
		jwtState:  NewStateTokenizer(time.Minute, cfg.SessionSecret),
		jwtAccess: NewAccessTokenizer(cfg.AccessTokenClaims),
		jwtOidc:   NewOidcTokenizer(provider.Verifier(&oidc.Config{ClientID: cfg.ClientID})),
		jwtUser:   NewUserTokenizer(time.Hour, cfg.SessionSecret),
		jwtSvcAcct: serviceAccountTokenizer{
			secret:   []byte(cfg.SessionSecret),
			lifetime: cfg.TokenLifetime.Duration(),
		},
		conf: &oauth2.Config{
			ClientID:     cfg.ClientID,
			ClientSecret: cfg.ClientSecret,
			Scopes:       []string{"email", oidc.ScopeOpenID, "profile"},
			RedirectURL:  fmt.Sprintf("https://%s/callback", cfg.Endpoint),
			Endpoint:     provider.Endpoint(),
		},
	}, nil
}
