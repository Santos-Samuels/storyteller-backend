import { User } from "@/infra/database/entities/user";
import { UserRepository } from "@/infra/database/repositories/user-repository";
import { Request, Response } from "express";

export class UserController {
  private userRepositoy = new UserRepository();
  // constructor(private userRepositoy: UserRepositoyInterface) {}

  async getAllUsers(req: Request, res: Response): Promise<void> {
    const users = await this.userRepositoy.getAllUsers();
    res.json(users);
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const user = await this.userRepositoy.getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send("User not found");
    }
  }

  async createUser(req: Request, res: Response): Promise<void> {
    const user = req.body as User;
    const newUser = await this.userRepositoy.createUser(user);
    res.status(201).json(newUser);
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const userData = req.body;
    const updatedUser = await this.userRepositoy.updateUser(id, userData);
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).send("User not found");
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    await this.userRepositoy.deleteUser(id);
    res.status(204).send();
  }
}
