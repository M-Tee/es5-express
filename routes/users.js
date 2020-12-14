var express = require('express');
var router = express.Router();
var { getUsers, delUser, createUser, login } = require('../controllers/user.controller')
/* GET users listing. */
//Admin only routes
router.get('/', getUsers)

router.delete('/delete', delUser)

//student router
router.post('/signup', createUser)

router.post('/login', login)


module.exports = router;
