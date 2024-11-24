import { IRole } from "../entities/role.entity";

export interface RoleRepositoryInterface {
  getAllRoles(): Promise<IRole[]>;
  getRoleById(id: string): Promise<IRole | null>;
}
