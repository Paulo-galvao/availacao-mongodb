import express from "express";
import vehicleControllers from "../controllers/vehicle-controllers.js";
const router = express.Router();

router.post('/', vehicleControllers.store);
router.get('/', vehicleControllers.index);
router.put('/:id', vehicleControllers.update);
router.delete('/:id', vehicleControllers.destroy);

export default router;