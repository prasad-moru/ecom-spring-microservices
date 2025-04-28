import { PassedInitialConfig } from 'angular-auth-oidc-client';

export const authConfig: PassedInitialConfig = {
  config: {
<<<<<<< HEAD
    authority: 'https://keycloak.preferedsolutions.com/realms/spring-microservices-security-realm',
=======
   // authority: 'http://keycloak.default.svc.cluster.local:8080/realms/spring-microservices-security-realm',
    authority: 'http://localhost:8080/realms/spring-microservices-security-realm',
>>>>>>> 097a5fc25502930af4fbf830e3c714987859f184
    redirectUrl: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
    clientId: 'angular-client',
    scope: 'openid profile offline_access',
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    renewTimeBeforeTokenExpiresInSeconds: 30,
  }
}
