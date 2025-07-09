import { authApiEndpoints } from './endpoints/auth';
import { tokenApiEndpoints } from './endpoints/token';
import { userApiEndpoints } from './endpoints/user';

const NetworkLoadingEndpoints = [
  authApiEndpoints.getLogout,
  authApiEndpoints.postLogin,
  authApiEndpoints.postRegistration,
  tokenApiEndpoints.postRefreshToken,
  userApiEndpoints.getActiveUserProfile,
  userApiEndpoints.getUsers,
  userApiEndpoints.getUserById,
];

export default NetworkLoadingEndpoints;
