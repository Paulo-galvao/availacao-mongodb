import express from "express";
import maintenanceControllers from "../controllers/maintenance-controllers.js";
import totalPrice from "../middlewares/total-price.js";
const router = express.Router();

router.post('/',totalPrice, maintenanceControllers.store);
router.get('/', maintenanceControllers.index);
router.put('/:id', maintenanceControllers.update);
router.delete('/:id', maintenanceControllers.destroy);

export default router;