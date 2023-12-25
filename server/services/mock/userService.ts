import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';

import { UserService, User } from '~/server/services/types';
import { getMockUsers, setMockUsers, getMockReadUsers } from '~/server/services/mock/data';

export function getUserService(): UserService {
  return {
    getUsers() {
      return Promise.resolve(getMockReadUsers());
    },
    async createUser(payload) {
      const mockUsers = getMockUsers();
      const user: User = {
        id: uuidv4(),
        ...payload
      }
      const hashPassword = await bcrypt.hash(payload.password, 10);
      user.password = hashPassword;
      mockUsers.push(user);
      setMockUsers(mockUsers);
      const { id, name, username } = user;
      return Promise.resolve({ id, name, username });
    },
    findUser(id: string) {
      return Promise.resolve(getMockReadUsers().find(user => user.id === id));
    },
    updateUser(id, payload) {
      let updatedUser: User | undefined = undefined;
      setMockUsers(getMockUsers().map(user => {
        if(user.id === id) {
          updatedUser = {
            ...user,
            ...payload,
          }
          return updatedUser;
        }
        return user;
      }));
      if(updatedUser) {
        delete updatedUser['password'];
      }
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
    },
    async verifyUserPassword(verifyUsername: string, verifyPassword: string) {
      const user = getMockUsers().find(user => user.username === verifyUsername);
      if(!user) {
        return undefined;
      }
      const { id, username, name } = user;
      const isCorrect = await bcrypt.compare(verifyPassword, user.password);
      if(!isCorrect) {
        return undefined;
      }
      return  { id, username, name };
    }
  }
}
