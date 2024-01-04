const express = require('express')
const router = express.Router()
const todoController = require('../controller/TodoController')





router.post('/create', todoController.create)
router.get('/getall', todoController.getall)
router.get('/getbyid/:id', todoController.getbyid)
router.put('/update/:id', todoController.update)
router.delete('/delete/:id', todoController.delete)



module.exports = router