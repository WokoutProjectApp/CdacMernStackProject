const express = require('express')


var router = express.Router()

var UserController = require('../Controller/userController')

// var ExerciseController = require('../Controller/exercisecontroller')

router.post('/registeruser',UserController.reguser)

router.post('/userLogin',UserController.userLogin)

// router.get('/',ExerciseController.finduser)

// router.post('/add',ExerciseController.adddata)

// router.get('/:id',ExerciseController.finddata)

// router.delete('/:id',ExerciseController.finddataanddelete)

// router.post('/update/:id',ExerciseController.updatedata)

module.exports = router