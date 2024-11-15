import { UserRepositoryInterface } from "@/domain/repositories/user-repository.interface";
import { Repository } from "typeorm";
import { User } from "../entities/user";
import { dataSource } from "../type-orm/typeorm.config";

export class UserRepository implements UserRepositoryInterface {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = dataSource.getRepository("users");
  }

  getAllUsers = async () => {
    return this.userRepository.find();
  };

  getUserById = async (id: string): Promise<User | undefined> => {
    const user = await this.userRepository.findOne({ where: { id } });
    return user ?? undefined;
  };

  createUser = async (user: User) => {
    return this.userRepository.save(user);
  };

  updateUser = async (id: string, user: User) => {
    await this.userRepository.update(id, user);
    return user;
  };

  deleteUser = async (id: string) => {
    await this.userRepository.delete(id);
  };
}
