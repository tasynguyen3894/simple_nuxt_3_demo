export type User = {
  id: string,
  name: string,
  password: string,
  username: string,
}

export type UserRead = Omit<User, 'password'>;

export type UserToken = {
  id: string,
  token: string,
  refreshToken: string,
  userId: string
}

export type UserPayload = Omit<User, 'id'>;

export type GetUsers = () => Promise<UserRead[]>;
export type FindUser = (id: string) => Promise<UserRead|undefined>;
export type UpdateUser = (id: string, payload: Partial<UserPayload>) => Promise<UserRead|undefined>;
export type CreateUser = (payload: UserPayload) => Promise<UserRead>;
export type DeleteUser = (id: string) => Promise<UserRead|undefined>;
export type VerifyUserPassword = (username: string, password: string) => Promise<undefined|UserRead>

export type UserService = {
  getUsers: GetUsers,
  findUser: FindUser,
  updateUser: UpdateUser,
  createUser: CreateUser,
  deleteUser: DeleteUser,
  verifyUserPassword: VerifyUserPassword
}

export type IssueUserToken = (userId: string) => Promise<{
  token: string,
  refreshToken: string
} | undefined>;
export type VerifyToken = (token: string) => Promise<boolean>;

export type AuthService = {
  verifyToken: VerifyToken,
  issueUserToken: IssueUserToken
}

export type Service = {
  getUserService(...args: any): UserService,
  getAuthService(...args: any): AuthService
}
