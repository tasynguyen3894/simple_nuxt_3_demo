import { ControllerAction } from './types';

import { getService } from '../services/factory';

export const getUsers: ControllerAction = async (event) => {
  const userService = getService().getUserService();
  const users = await userService.getUsers();
  return {
    users
  }
}

export const deleteUser: ControllerAction = async (event) => {
  const userService = getService().getUserService();
  const id = getRouterParam(event, 'id');
  if(id) {
    const result = await userService.deleteUser(id);
    if(result) {
      return {
        status: true
      }
    } else {
      setResponseStatus(event, 404);
      return {
        status: false
      }
    }
  }
}
