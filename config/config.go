// Package config provides configurability for the entire application.
package config

import (
	"github.com/stackrox/infra-auth-lib/auth/claimrule"
)

// AuthOidcConfig represents the configuration for integrating with OIDC provider.
type AuthOidcConfig struct {
	// OfflineProviderConfig enables air-gapped OIDC provider integration.
	// Instead of downloading the provider configuration from the issuer's well-known path,
	// issuer, authURL, tokenURL, userInfoURL, JWKSURL, and algorithms must be specified
	// in this config.
	OfflineProviderConfig bool `json:"offlineProviderConfig"`

	// IssuerURL is the identity of the provider, and the string it uses to sign
	// ID tokens with. For example "https://accounts.google.com". This value MUST
	// match ID tokens exactly. This value MUST also be provided if OfflineProviderConfig is false.
	IssuerURL string `json:"issuer"`

	// AuthURL is the endpoint used by the provider to support the OAuth 2.0
	// authorization endpoint.
	AuthURL string `json:"authUrl"`
	// TokenURL is the endpoint used by the provider to support the OAuth 2.0
	// token endpoint.
	TokenURL string `json:"tokenUrl"`
	// UserInfoURL is the endpoint used by the provider to support the OpenID
	// Connect UserInfo flow.
	//
	// https://openid.net/specs/openid-connect-core-1_0.html#UserInfo
	UserInfoURL string `json:"userInfoUrl"`
	// JWKSURL is the endpoint used by the provider to advertise public keys to
	// verify issued ID tokens. This endpoint is polled as new keys are made
	// available.
	JWKSURL string `json:"jwksUrl"`

	// Algorithms, if provided, indicate a list of JWT algorithms allowed to sign
	// ID tokens. If not provided, this defaults to the algorithms advertised by
	// the JWK endpoint, then the set of algorithms supported by this package.
	Algorithms []string `json:"algorithms"`

	// ClientID is the client ID for the OIDC application integration.
	ClientID string `json:"clientID"`

	// ClientSecret is the client secret for the OIDC application integration.
	ClientSecret string `json:"clientSecret"`

	// Endpoint is the server hostname with optional port used for redirecting
	// requests back from OIDC provider. An example value would be
	// "localhost:8443" or "example.com".
	Endpoint string `json:"endpoint"`

	// SessionSecret is an arbitrary string used in the signing of session
	// tokens. Changing this value would invalidate current sessions.
	SessionSecret string `json:"sessionSecret"`

	// AccessTokenClaims are the list of defined claim rules used to validate
	// access token claims provided by the OIDC Provider.
	// All claims have to be fulfilled.
	AccessTokenClaims *claimrule.ClaimRules `json:"accessTokenClaims"`

	// TokenLifeTime is the duration for which generated service account tokens
	// shall be valid. An example value would be 30m or 8760h.
	TokenLifetime JSONDuration `json:"tokenLifetime"`

	// EmailBlockList is the list of emails of service accounts that are disallowed access.
	// An example value would be donotreply@stackrox.com
	EmailBlockList []string `json:"emailBlockList"`

	// AllowedEmailSuffix is the email suffix to
	AllowedEmailSuffix string `json:"allowedEmailSuffix"`
}

var (
	AllowedEmailSuffix string
	EmailBlockList     map[string]bool
)
