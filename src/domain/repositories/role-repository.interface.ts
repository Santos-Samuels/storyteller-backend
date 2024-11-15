import { Role } from "../entities/role.entity";

export interface RoleRepositoryInterface {
  getAllRoles(): Promise<Role[]>;
  getRoleById(id: string): Promise<Role | undefined>;
  createRole(role: Role): Promise<Role>;
  updateRole(id: string, role: Role): Promise<Role>;
  deleteRole(id: string): Promise<void>;
}
