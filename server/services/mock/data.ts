import { v4 as uuidv4 } from 'uuid';

import { User, UserRead, UserToken } from '~/server/services/types';

let mockUser: User[] = [
  {
    id: uuidv4(),
    name: 'User 1',
    username: 'username_1',
    password: '$2b$10$iHut9R3BDooGM..VAowEWO4K3OLMwwV9CCjbsVgI3.CtDApnJ/eN6' // Password: s0m3P4$$w0rD
  }
];

let mockUserTokens: UserToken[] = []

export function setMockUsers(users: User[]) {
  mockUser = users;
}

export function getMockUsers(): User[] {
  return mockUser;
}

export function setMockUserTokens(userTokens: UserToken[]) {
  mockUserTokens = userTokens;
}

export function getMockUserTokens(): UserToken[] {
  return mockUserTokens;
}

export function getMockReadUsers(): UserRead[] {
  return getMockUsers().map(({ id, username, name }) => {
    return {
      id, username, name
    }
  })
}
