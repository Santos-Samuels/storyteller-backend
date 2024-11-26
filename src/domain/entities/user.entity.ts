import { BaseEntity } from "@/application/entities/base-entity";
import { IRole } from "./role.entity";

export interface IUser extends BaseEntity {
  name: string;
  email: string;
  password?: string;
  roleId: IRole["id"];

  role?: IRole;
}
