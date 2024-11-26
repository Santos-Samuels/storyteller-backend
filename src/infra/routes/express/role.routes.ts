import { RoleController } from "@/http/controller/role-controller";
import { Router } from "express";

const router = Router();
const controller = new RoleController();

router.get("/role", controller.getAllRoles);
router.get("/role/:id", controller.getRoleById);

export default router;
