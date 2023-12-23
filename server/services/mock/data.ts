import { v4 as uuidv4 } from 'uuid';

import { User } from '~/server/services/types';

let mockUser: User[] = [
  {
    id: uuidv4(),
    name: 'User 1'
  },
  {
    id: uuidv4(),
    name: 'User 2'
  }
];

export function setMockUsers(users: User[]) {
  mockUser = users;
}

export function getMockUsers(): User[] {
  return mockUser;
}
