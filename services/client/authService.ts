import type { AuthService } from '../type';

export function getAuthService(): AuthService {
  return {
    login(username: string, password: string) {
      return new Promise((resolve, reject) => {
        $fetch('/api/auth/login', {
          method: 'POST',
          body: {
            username,
            password
          }
        })
        .then(result => {
          resolve(result)
        })
        .catch(error => reject(error))
      })
    }
  }
}
