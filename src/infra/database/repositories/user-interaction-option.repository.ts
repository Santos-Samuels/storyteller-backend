import {
  CreateUserInteractionOptionDTO,
  ListUserInteractionOptionsDTO,
  UpdateUserInteractionOptionDTO,
} from "@/domain/dtos/user-interaction-option.dto";
import { IUserInteractionOption } from "@/domain/entities/user-interaction-option.entity";
import { UserInteractionOptionRepositoryInterface } from "@/domain/repositories/user-interaction-option-repository.interface";
import { PrismaClient } from "@prisma/client";
import prisma from "../prisma/prisma";

export class UserInteractionOptionRepository
  implements UserInteractionOptionRepositoryInterface
{
  private userInteractionOptionRepository = prisma.userInteractionOption;

  constructor(private readonly trx?: PrismaClient) {
    if (!this.trx) return;
    this.userInteractionOptionRepository = prisma.userInteractionOption;
  }

  getAllUserInteractionOptions = async (
    params: ListUserInteractionOptionsDTO
  ): Promise<IUserInteractionOption[]> => {
    return this.userInteractionOptionRepository.findMany({
      where: params,
    });
  };

  getUserInteractionOptionById = async (
    id: string
  ): Promise<IUserInteractionOption | null> => {
    return this.userInteractionOptionRepository.findUnique({
      where: { id },
    });
  };

  createUserInteractionOption = async (
    data: CreateUserInteractionOptionDTO
  ): Promise<IUserInteractionOption> => {
    return this.userInteractionOptionRepository.create({
      data,
    });
  };

  updateUserInteractionOption = async (
    id: IUserInteractionOption["id"],
    data: UpdateUserInteractionOptionDTO
  ): Promise<IUserInteractionOption> => {
    return this.userInteractionOptionRepository.update({
      where: { id },
      data,
    });
  };

  deleteUserInteractionOption = async (id: string): Promise<void> => {
    await this.userInteractionOptionRepository.delete({ where: { id } });
  };
}
