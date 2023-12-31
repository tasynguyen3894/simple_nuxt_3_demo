import { getService } from '~/server/services/factory';

const nonRequireTokenPaths: string[] = [
  '/api/auth/login'
];

export default defineEventHandler(async (event) => {
  const path = getRequestPath(event);
  if(path.startsWith('/api') && !nonRequireTokenPaths.includes(path)) {
    const token = getRequestHeader(event, 'X-Token');
    const authService = getService().getAuthService();
    if(!token || !(await authService.verifyToken(token))) {
      setResponseStatus(event, 401);
      return {
        message: 'Miss token'
      }
    }
  }
})