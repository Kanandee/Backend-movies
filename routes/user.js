import { Router } from "express";
const router = Router();

import UserController from "../controllers/UserController.js";
import isSuperAdmin from "../middelwares/isSuperAdmin.js";
import isAdmin from "../middelwares/isAdmin.js";
import isUser from "../middelwares/isUser.js";
import verifyToken from "../middelwares/verifyToken.js";

/* GET users listing. */
router.get("/", verifyToken, isSuperAdmin, UserController.getAll);
router.get("/:email", verifyToken, isUser, UserController.getInfo);

export default router;
