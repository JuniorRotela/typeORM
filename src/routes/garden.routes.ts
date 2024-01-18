import { Router } from "express";
import { createGarden } from "../controllers/garden.controllers";

const router = Router()
router.post("/garden", createGarden);

export default router;