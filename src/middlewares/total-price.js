import Maintenance from "../models/maintenance-model.js";

async function totalPrice(req, res, next) {
    try {
        let totalPrice = 0;
        const newBody = req.body;
        const prices = newBody.services.map(service => service.price)
        prices.forEach( price => {
            totalPrice += price;
        });
        newBody.totalCost = totalPrice;
    } catch (error) {
        console.log(error);
    }
    next();
}

export default totalPrice;