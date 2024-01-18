import { Router } from "express";
import { createGarden, getGarden, updateGarden } from "../controllers/garden.controllers";

const router = Router()
router.post("/garden", createGarden);
router.get("/garden", getGarden);
router.post("/garden/:id", updateGarden);

export default router;