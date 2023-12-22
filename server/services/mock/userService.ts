import { v4 as uuidv4 } from 'uuid';

import { UserService, User } from '~/server/services/types';

let mockUser: User[] = [
  {
    id: uuidv4(),
    name: 'User 1'
  },
  {
    id: uuidv4(),
    name: 'User 2'
  }
]

export function getUserService(): UserService {
  return {
    getUsers() {
      return Promise.resolve(mockUser);
    },
    createUser(payload) {
      const user: User = {
        id: uuidv4(),
        ...payload
      }
      mockUser.push(user);
      return Promise.resolve(user);
    },
    findUser(id: string) {
      return Promise.resolve(mockUser.find(user => user.id === id));
    },
    updateUser(id, payload) {
      let updatedUser: User | undefined = undefined;
      mockUser = mockUser.map(user => {
        if(user.id === id) {
          updatedUser = {
            ...user,
            ...payload
          }
          return updatedUser;
        }
        return user;
      });
      return Promise.resolve(updatedUser);
    },
    deleteUser(id: string) {
      let hasDeletedUser: boolean | undefined = undefined;
      mockUser = mockUser.filter(user => {
        if(user.id === id) {
          hasDeletedUser = true;
          return true;
        }
        return false;
      });
      return Promise.resolve(hasDeletedUser);
    }
  }
}
