import { Router } from "express";
const router = Router();

import UserController from "../controllers/UserController.js";
import isSuperAdmin from "../middelwares/isSuperAdmin.js";
import isAdmin from "../middelwares/isAdmin.js";
import isUser from "../middelwares/isUser.js";
import verifyToken from "../middelwares/verifyToken.js";

/* GET users listing. */
router.get("/", verifyToken, isSuperAdmin, UserController.getAll);
router.get("/:id", verifyToken, UserController.getInfo);
router.get("/:id/rent/:movie", UserController.rentMovie);
router.post("/:id/rent", UserController.rentAllMovie);
router.get("/:id/delete/:movie", verifyToken, UserController.deleteMovie);
router.get("/:id/delete", verifyToken,isSuperAdmin, UserController.deleteUser);
export default router;
