import { RoleController } from "@/http/controller/role-controller";
import { Router } from "express";

const router = Router();
// const controller = roleControllerFactory();
const controller = new RoleController();

router.get("/role", controller.getAllRoles);
router.get("/role/:id", controller.getRoleById);
router.post("/role", controller.createRole);
router.put("/role/:id", controller.updateRole);
router.delete("/role/:id", controller.deleteRole);

export default router;
