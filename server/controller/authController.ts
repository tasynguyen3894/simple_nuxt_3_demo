import { ControllerAction } from './types';

import { readJSONBody } from '../services/helpers';
import { getService } from '../services/factory';

export const login: ControllerAction = async (event) => {
  const [error, body] = await readJSONBody(event);
  if(error === undefined && body.password && body.username) {
    const userService = getService().getUserService();
    const authService = getService().getAuthService();
    const user = await userService.verifyUserPassword(body.username, body.password);
    if(!user) {
      setResponseStatus(event, 403)
      return {
        message: 'Wrong username or password'
      }
    }
    const newToken = await authService.issueUserToken(user.id);
    if(!newToken) {
      setResponseStatus(event, 403)
      return {
        message: 'Can not issue new access token'
      }
    }
    return {
      user: {
        ...user,
        token: newToken.token,
        refreshToken: newToken.refreshToken
      }
    }
  } else {
    setResponseStatus(event, 422);
    return {
      message: 'Wrong body request'
    }
  }
}

