import express from "express";
import workshopControllers from "../controllers/workshop-controllers.js";
const router = express.Router();

router.post('/', workshopControllers.store);
router.get('/', workshopControllers.index);
router.put('/:id', workshopControllers.update);
router.delete('/:id', workshopControllers.destroy);

export default router; 