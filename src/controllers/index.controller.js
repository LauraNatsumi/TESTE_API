const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user:  'postgres',
    password: '',
    database: '',
    port: '5432'

});

const getEmployees = async (req, res) => {
    const response = await pool.query('SELECT * FROM employees');
    res.status(200).json(response.rows);
};

const deleteEmployee = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('DELETE FROM employees where Id = $1', [id]);
    res.send('employee deleted');
};

const createEmployee = async (req, res) => {
    try {
        const {name, regime, CPF_CNPJ, occupation, email, telephone1, telephone2 } = req.body;
        console.log(req.body);
        const response = await pool.query(
            'INSERT INTO employees(name, regime, CPF_CNPJ, occupation, email, telephone1, telephone2) VALUES ($1, $2, $3, $4, $5, $6, $7)',
            [name, regime, CPF_CNPJ, occupation, email, telephone1, telephone2]);
        console.log(response);
        res.send('employee created');
    }catch(e){console.log(e)}
};

const updateEmployee = async (req, res) => {
    try {
        const id = req.params.id
        const {name, regime, CPF_CNPJ, occupation, email, telephone1, telephone2 } = req.body;
        console.log(req.body);
        const response = await pool.query(
            'UPDATE employees set name = $1, regime = $2, CPF_CNPJ = $3, occupation = $4, email = $5, telephone1 = $6, telephone2 = $7 WHERE id = $8',
            [name, regime, CPF_CNPJ, occupation, email, telephone1, telephone2, id]);
        console.log(response);
        res.send('employee updated');
    }catch(e){console.log(e)}
};

const getEmployeeByid = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('SELECT * FROM employees where Id = $1', [id]);
    res.status(200).json(response.rows);
};
    
module.exports = {
    getEmployees,
    deleteEmployee,
    createEmployee,
    getEmployeeByid,
    updateEmployee
}