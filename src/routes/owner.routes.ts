import { Router } from "express";
import { createGarden, deleteGarden, getGarden, getOneGarden, updateGarden } from "../controllers/garden.controllers";
import { createOwner, getOwner } from "../controllers/owner.controllers";
import { validateOwner } from "../validators/owner.validation";

const router = Router()
router.post("/owner", validateOwner, createOwner);
router.get("/owner", getOwner);
router.get("/owner/:id", getOneGarden);
router.put("/owner/:id", updateGarden);
router.delete("/owner/:id", deleteGarden);


export default router;