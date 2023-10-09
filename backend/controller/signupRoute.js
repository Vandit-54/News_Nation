const express = require('express');
const router = express.Router();
const {saveSignUpDetails,verifyLoginUser,verifyJwtUser} = require('../services/signUpForm');

// const cookieParser = require('cookie-parser');
// router.use(cookieParser());

router.post('/user-signup',saveSignUpDetails);

router.post('/user-login',verifyLoginUser);

router.post('/verify-user',verifyJwtUser);

module.exports = router;