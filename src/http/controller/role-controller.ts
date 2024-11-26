import { RoleRepository } from "@/infra/database/repositories/role-repository";
import { Request, Response } from "express";

const roleRepositoy = new RoleRepository();

export class RoleController {
  async getAllRoles(_req: Request, res: Response): Promise<void> {
    try {
      const roles = await roleRepositoy.getAllRoles();
      res.status(200).send(roles);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }

  async getRoleById(req: Request, res: Response): Promise<void> {
    try {
      const roleId = req.params.id;
      const role = await roleRepositoy.getRoleById(roleId);

      if (!role) {
        res.status(404).send("Role not found");
        return;
      }

      res.status(200).send(role);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }
}
