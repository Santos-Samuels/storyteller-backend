import { CreateUserDTO, UpdateUserDTO } from "../dtos/user.dto";
import { IUser } from "../entities/user.entity";

export interface UserRepositoryInterface {
  getAllUsers(): Promise<IUser[]>;
  getUserById(id: string): Promise<IUser | null>;
  getUserByEmail(email: string): Promise<IUser | null>;
  createUser(data: CreateUserDTO): Promise<IUser>;
  updateUser(id: IUser["id"], data: UpdateUserDTO): Promise<IUser>;
  deleteUser(id: string): Promise<void>;
}
