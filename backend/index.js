const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
require('dotenv').config();
require('./db/connect');
app.use(express.json({ urlencoded: true }));
app.use(cors());

//Getting the router object from routes in controller
const signUpRoute = require('./controller/signupRoute');
//Sign-up route
app.use('/our-client', signUpRoute);


const server = app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});