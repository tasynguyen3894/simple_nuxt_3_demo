import { Service } from '~/server/services/types';

import { getUserService } from './userService';
import { getAuthService } from './authService';

export function getMockService(): Service {
  return {
    getUserService,
    getAuthService
  }
}
