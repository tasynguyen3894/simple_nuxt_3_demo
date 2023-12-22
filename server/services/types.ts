export type User = {
  id: string,
  name: string
}

export type UserPayload = Omit<User, 'id'>;

export type GetUsers = () => Promise<User[]>;
export type FindUser = (id: string) => Promise<User|undefined>;
export type UpdateUser = (id: string, payload: Partial<UserPayload>) => Promise<User|undefined>;
export type CreateUser = (payload: UserPayload) => Promise<User>;
export type DeleteUser = (id: string) => Promise<User|undefined>;

export type UserService = {
  getUsers: GetUsers,
  findUser: FindUser,
  updateUser: UpdateUser,
  createUser: CreateUser,
  deleteUser: DeleteUser
}

export type Service = {
  getUserService(...args: any): UserService
}
