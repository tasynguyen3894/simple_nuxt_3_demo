import { ControllerAction } from './types';

import { getService } from '../services/factory';

export const getUsers: ControllerAction = async (event) => {
  const userService = getService().getUserService();
  const users = await userService.getUsers();
  return {
    users
  }
}
