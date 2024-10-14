import WorkshopModel from "../models/workshop-model.js";

async function store(req, res) {
    try {
        const content = await WorkshopModel.create(req.body);
        res.status(201).json(content);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

async function index(req, res) {
    try {
        const content = await WorkshopModel.find().exec();
        res.status(200).json(content);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

async function update(req, res) {
    try {
        const content = await WorkshopModel.findByIdAndUpdate(req.params.id, req.body).exec();
        res.status(200).json(content);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

async function destroy(req, res) {
    try {
        const content = await WorkshopModel.findByIdAndDelete(req.params.id).exec();
        res.status(200).json(content);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export default {
    store,
    index,
    update,
    destroy
}; 