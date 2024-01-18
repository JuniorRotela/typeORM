import { Router } from "express";
import { createUser, deleteUser, getOneUser, getUsers, updateUser } from "../controllers/user.controllers";

const router = Router()

router.post("/users", createUser);
router.get("/users", getUsers);
router.get("/users/:id", getOneUser)
router.put("/users/:id", updateUser)
router.delete("/users/:id", deleteUser)

export default router;
