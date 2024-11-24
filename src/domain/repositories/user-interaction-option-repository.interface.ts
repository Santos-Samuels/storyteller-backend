import {
  CreateUserInteractionOptionDTO,
  ListUserInteractionOptionsDTO,
  UpdateUserInteractionOptionDTO,
} from "../dtos/user-interaction-option.dto";
import { IUserInteractionOption } from "../entities/user-interaction-option.entity";

export interface UserInteractionOptionRepositoryInterface {
  getAllUserInteractionOptions(
    params: ListUserInteractionOptionsDTO
  ): Promise<IUserInteractionOption[]>;
  getUserInteractionOptionById(
    id: string
  ): Promise<IUserInteractionOption | null>;
  createUserInteractionOption(
    data: CreateUserInteractionOptionDTO
  ): Promise<IUserInteractionOption>;
  updateUserInteractionOption(
    id: IUserInteractionOption["id"],
    data: UpdateUserInteractionOptionDTO
  ): Promise<IUserInteractionOption>;
  deleteUserInteractionOption(id: string): Promise<void>;
}
