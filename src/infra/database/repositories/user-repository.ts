import { CreateUserDTO, UpdateUserDTO } from "@/domain/dtos/user.dto";
import { IUser } from "@/domain/entities/user.entity";
import { UserRepositoryInterface } from "@/domain/repositories/user-repository.interface";
import prisma from "../prisma/prisma";

export class UserRepository implements UserRepositoryInterface {
  private userRepository = prisma.user;

  getAllUsers = async () => {
    return this.userRepository.findMany();
  };

  getUserById = async (id: string): Promise<IUser | null> => {
    return this.userRepository.findUnique({ where: { id } });
  };

  getUserByEmail = async (email: string): Promise<IUser | null> => {
    return this.userRepository.findUnique({
      where: { email },
      include: { role: true },
      omit: { password: false },
    });
  };

  createUser = async (data: CreateUserDTO) => {
    return this.userRepository.create({
      data,
    });
  };

  updateUser = async (id: IUser["id"], data: UpdateUserDTO) => {
    return this.userRepository.update({
      where: { id },
      data,
    });
  };

  deleteUser = async (id: string) => {
    await this.userRepository.delete({ where: { id } });
  };
}
