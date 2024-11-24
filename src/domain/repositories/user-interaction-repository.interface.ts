import {
  CreateUserInteractionDTO,
  ListUserInteractionsDTO,
} from "../dtos/user-interaction.dto";
import { IUserInteraction } from "../entities/user-interaction.entity";

export interface UserInteractionRepositoryInterface {
  getAllUserInteractions(
    params: ListUserInteractionsDTO
  ): Promise<IUserInteraction[]>;
  getUserInteractionById(id: string): Promise<IUserInteraction | null>;
  createUserInteraction(
    data: CreateUserInteractionDTO
  ): Promise<IUserInteraction>;
  deleteUserInteraction(id: string): Promise<void>;
}
