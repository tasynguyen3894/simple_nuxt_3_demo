import type { Service } from '../type';

import { getAuthService } from './authService';

export function getClientService(): Service {
  return {
    getAuthService
  }
}

