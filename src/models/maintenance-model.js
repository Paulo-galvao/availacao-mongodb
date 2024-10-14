import conn from "../config/conn.js";

const Schema = conn.Schema;

const maintenanceScema = new Schema({
    workshop: {
        type: Schema.Types.ObjectId,
        ref: "Workshop",
        required: true,
    },
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: "Vehicle",
        required: true,
    },
    services: [{
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }],
    date: {
        type: Date,
        required: true
    },
    totalCost: {
        type: Number
    }
});

const Maintenance = conn.model("Maintenance", maintenanceScema);

export default Maintenance;