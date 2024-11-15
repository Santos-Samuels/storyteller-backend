import { Role } from "@/infra/database/entities/role";
import { RoleRepository } from "@/infra/database/repositories/role-repository";
import { Request, Response } from "express";

export class RoleController {
  private roleRepositoy = new RoleRepository();

  async getAllRoles(req: Request, res: Response): Promise<void> {
    const roles = await this.roleRepositoy.getAllRoles();
    // const roles = await dataSource.getRepository(Role).find();
    res.send(roles);
  //  res.send("Hello World");
  }

  async getRoleById(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const role = await this.roleRepositoy.getRoleById(id);
    if (role) {
      res.json(role);
    } else {
      res.status(404).send("Role not found");
    }
  }

  async createRole(req: Request, res: Response): Promise<void> {
    const role = req.body as Role;

    try {
      const newRole = await this.roleRepositoy.createRole(role);
      res.status(201).json(newRole);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  async updateRole(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const roleData = req.body;
    const updatedRole = await this.roleRepositoy.updateRole(id, roleData);
    if (updatedRole) {
      res.json(updatedRole);
    } else {
      res.status(404).send("Role not found");
    }
  }

  async deleteRole(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    await this.roleRepositoy.deleteRole(id);
    res.status(204).send();
  }
}
