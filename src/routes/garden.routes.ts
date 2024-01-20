import { Router } from "express";
import { createGarden, deleteGarden, getGarden, getOneGarden, updateGarden } from "../controllers/garden.controllers";

const router = Router()
router.post("/garden", createGarden);
router.get("/garden", getGarden);
router.get("/garden/:id", getOneGarden);
router.put("/garden/:id", updateGarden);
router.delete("/garden/:id", deleteGarden);

export default router;