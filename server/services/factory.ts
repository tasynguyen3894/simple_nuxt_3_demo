import { Service } from './types';

import { getMockService } from './mock';

export function getService(): Service {
  return getMockService();
}
