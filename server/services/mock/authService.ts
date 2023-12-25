import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';

import { AuthService, User, UserToken } from '~/server/services/types';
import { getMockUsers, getMockUserTokens, setMockUserTokens } from '~/server/services/mock/data';

export function getAuthService(): AuthService {
  return {
    issueUserToken(userId: string) {
      const user = getMockUsers().find(user => user.id === userId);
      if(!user) {
        return Promise.resolve(undefined);
      }
      const userToken: UserToken = {
        id: uuidv4(),
        token: uuidv4(),
        refreshToken: uuidv4(),
        userId
      }
      setMockUserTokens(
        [...getMockUserTokens(), userToken]
      );
      return Promise.resolve({
        token: userToken.token,
        refreshToken: userToken.refreshToken
      })
    }
  }
}
