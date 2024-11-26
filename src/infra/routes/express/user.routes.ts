import { UserController } from "@/http/controller/user-controller";
import { Router } from "express";

const router = Router();
const controller = new UserController();

router.get("/user", controller.getAllUsers);
router.get("/user/:id", controller.getUserById);
router.post("/user/", controller.createUser);
router.put("/user/:id", controller.updateUser);
router.delete("/user/:id", controller.deleteUser);

export default router;
