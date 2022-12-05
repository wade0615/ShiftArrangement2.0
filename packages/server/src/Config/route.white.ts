import apiPath from 'src/Center/api.path';

const authApiPaths = Object.keys(apiPath.white_auth).map(
  (path) => `auth/${path}`,
);

export const RouteWhite = [
  /** test api list */
  ...authApiPaths,
];
