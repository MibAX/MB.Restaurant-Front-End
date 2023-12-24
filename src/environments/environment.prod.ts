import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'Restaurant',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44333/',
    redirectUri: baseUrl,
    clientId: 'Restaurant_App',
    responseType: 'code',
    scope: 'offline_access Restaurant',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44333',
      rootNamespace: 'MB.Restaurant',
    },
  },
} as Environment;
