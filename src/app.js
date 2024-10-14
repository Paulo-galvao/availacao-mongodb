import express from "express";
import "dotenv/config";

import workshopRouter from "./routes/workshop-route.js";
import vehicleRouter from "./routes/vehicle-route.js";
import maintenanceRouter from "./routes/maintenance-route.js";

const port = process.env.PORT;

const app = express();
app.use(express.json());

app.use('/workshop', workshopRouter);
app.use('/vehicle', vehicleRouter);
app.use('/maintenance', maintenanceRouter);

app.listen(port, () => console.log("Server running at port", port));