import { v4 as uuidv4 } from 'uuid';

import { UserService, User } from '~/server/services/types';
import { getMockUsers, setMockUsers } from '~/server/services/mock/data';

export function getUserService(): UserService {
  return {
    getUsers() {
      return Promise.resolve(getMockUsers());
    },
    createUser(payload) {
      const mockUsers = getMockUsers();
      const user: User = {
        id: uuidv4(),
        ...payload
      }
      mockUsers.push(user);
      setMockUsers(mockUsers);
      return Promise.resolve(user);
    },
    findUser(id: string) {
      return Promise.resolve(getMockUsers().find(user => user.id === id));
    },
    updateUser(id, payload) {
      let updatedUser: User | undefined = undefined;
      setMockUsers(getMockUsers().map(user => {
        if(user.id === id) {
          updatedUser = {
            ...user,
            ...payload
          }
          return updatedUser;
        }
        return user;
      }));
      return Promise.resolve(updatedUser);
    },
    deleteUser(id: string) {
      let hasDeletedUser: boolean | undefined = undefined;
      setMockUsers(getMockUsers().filter(user => {
        if(user.id === id) {
          hasDeletedUser = true;
          return true;
        }
        return false;
      }));
      return Promise.resolve(hasDeletedUser);
    }
  }
}
