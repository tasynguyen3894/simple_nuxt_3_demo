import type { Service } from './type';
import { getClientService } from './client';

export function getService(): Service {
  return getClientService();
}
