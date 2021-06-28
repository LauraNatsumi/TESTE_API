const { Router } = require('express');
const router = Router();

const { getEmployees, deleteEmployee, createEmployee, getEmployeeByid, updateEmployee } = require('../controllers/index.controller')

router.get('/employees', getEmployees);
router.post('/employees', createEmployee);
router.delete('/employees/:id', deleteEmployee );
router.get('/employees/:id', getEmployeeByid);
router.put('/employees/:id', updateEmployee)


module.exports = router;
