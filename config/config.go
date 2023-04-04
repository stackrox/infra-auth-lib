// Package config provides configurability for the entire application.
package config

import (
	"github.com/stackrox/infra-auth-lib/auth/claimrule"
)

// AuthOidcConfig represents the configuration for integrating with OIDC provider.
type AuthOidcConfig struct {
	// Issuer is the full URL provided by OIDC provider. An example:
	// "https://auth.stage.redhat.com/auth/realms/EmployeeIDP".
	Issuer string `json:"issuer"`

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
}
