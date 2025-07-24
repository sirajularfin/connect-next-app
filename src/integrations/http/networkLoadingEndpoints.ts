import { authApiEndpoints } from './endpoints/auth';
import { tokenApiEndpoints } from './endpoints/token';

const NetworkLoadingEndpoints = [
  authApiEndpoints.getLogout,
  authApiEndpoints.postLogin,
  authApiEndpoints.postRegistration,
  tokenApiEndpoints.postRefreshToken,
];

export default NetworkLoadingEndpoints;
