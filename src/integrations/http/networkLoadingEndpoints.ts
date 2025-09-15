import { authApiEndpoints } from './endpoints/auth.api';
import { tokenApiEndpoints } from './endpoints/token.api';

const NetworkLoadingEndpoints = [
  authApiEndpoints.getLogout,
  authApiEndpoints.postLogin,
  authApiEndpoints.postRegistration,
  tokenApiEndpoints.postRefreshToken,
];

export default NetworkLoadingEndpoints;
