import { Service } from '~/server/services/types';

import { getUserService } from './userService';

export function getMockService(): Service {
  return {
    getUserService
  }
}
