const connection = require('./connection')

const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const createTasks = async (tasks) => {
    const { title } = tasks;
    const dateUTC = new Date(Date.now()).toUTCString();
    
    const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?,?,?)';
    
    const [createdTasks] = await connection.execute(query, [title, 'pendente', dateUTC]);
    return {insertId: createdTasks.insertId};
};

module.exports = {
    getAll, 
    createTasks
};