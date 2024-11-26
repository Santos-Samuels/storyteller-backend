import { UserRepository } from "@/infra/database/repositories/user-repository";
import { Request, Response } from "express";
import { validateCreateUserBody } from "./schema/user/createUser.schema";
import { validateUpdateUserBody } from "./schema/user/updateUser.schema";

const userRepositoy = new UserRepository();

export class UserController {
  async getAllUsers(_req: Request, res: Response): Promise<void> {
    try {
      const users = await userRepositoy.getAllUsers();
      res.status(200).send(users);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const user = await userRepositoy.getUserById(userId);

      if (!user) {
        res.status(404).send("User not found");
        return;
      }

      res.status(200).send(user);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const data = await validateCreateUserBody(req.body);
      const newUser = await userRepositoy.createUser(data);
      res.status(201).send(newUser);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;

      const foundUser = await userRepositoy.getUserById(userId);

      if (!foundUser) {
        res.status(404).send("User not found");
        return;
      }

      const data = await validateUpdateUserBody(req.body);
      const updatedUser = await userRepositoy.updateUser(userId, {
        name: data.name,
      });

      res.status(200).send(updatedUser);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const foundUser = await userRepositoy.getUserById(userId);

      if (!foundUser) {
        res.status(404).send("User not found");
        return;
      }

      await userRepositoy.deleteUser(userId);
      res.status(204).send();
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
