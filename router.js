// 路由分发
const express = require('express');
const router = express.Router();
const user = require('./controller/c_user');
router.get('/signin',user.showIndex)
.post('/handleSignin',user.handleSignin)
module.exports = router;