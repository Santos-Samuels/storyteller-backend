import { User } from "../entities/user.entity";

export interface UserRepositoryInterface {
  getAllUsers(): Promise<User[]>;
  getUserById(id: string): Promise<User | undefined>;
  createUser(user: User): Promise<User>;
  updateUser(id: string, user: User): Promise<User>;
  deleteUser(id: string): Promise<void>;
}
