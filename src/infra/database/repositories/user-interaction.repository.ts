import {
  CreateUserInteractionDTO,
  ListUserInteractionsDTO,
} from "@/domain/dtos/user-interaction.dto";
import { IUserInteraction } from "@/domain/entities/user-interaction.entity";
import { UserInteractionRepositoryInterface } from "@/domain/repositories/user-interaction-repository.interface";
import { PrismaClient } from "@prisma/client";
import prisma from "../prisma/prisma";

export class UserInteractionRepository
  implements UserInteractionRepositoryInterface
{
  private userInteractionRepository = prisma.userInteraction;

  constructor(private readonly trx?: PrismaClient) {
    if (!this.trx) return;
    this.userInteractionRepository = prisma.userInteraction;
  }

  getAllUserInteractions = async (
    params: ListUserInteractionsDTO
  ): Promise<IUserInteraction[]> => {
    return this.userInteractionRepository.findMany({
      where: params,
    });
  };

  getUserInteractionById = async (
    id: string
  ): Promise<IUserInteraction | null> => {
    return this.userInteractionRepository.findUnique({
      where: { id },
    });
  };

  createUserInteraction = async (
    data: CreateUserInteractionDTO
  ): Promise<IUserInteraction> => {
    return this.userInteractionRepository.create({
      data,
    });
  };

  deleteUserInteraction = async (id: string): Promise<void> => {
    await this.userInteractionRepository.delete({ where: { id } });
  };
}
