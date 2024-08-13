const tasksModel = require('../models/tasksModel');

const getAll = async (_req, res) => {
    const tasks = await tasksModel.getAll();
    return res.status(200).json(tasks);
};

const createTasks = async (req, res) => {
    const createdTasks = await tasksModel.createTasks(req.body);
   
    return res.status(201).json(createdTasks);
};

module.exports = {
    getAll,
    createTasks
};
