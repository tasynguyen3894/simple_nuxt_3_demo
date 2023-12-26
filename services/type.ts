import { type UserRead } from "~/server/services/types"

export type AuthService = {
  login(username: string, password: string): Promise<UserRead & { token: string, refreshToken: string }>
}

export type Service = {
  getAuthService(...args: any[]): AuthService
}
