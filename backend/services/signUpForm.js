const indusSignUp = require('../schemas/signupSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.saveSignUpDetails = async (req, res) => {

    try {
        const { email, password, firstName, lastName, phone } = req.body;
        const checkUser = await indusSignUp.findOne({ email });
        if (checkUser)
            return res.status(401).send("You have already registered!!");
        else {
            const hashedPassword = await bcrypt.hash(password, 10);

            const responseData = {
                email,
                password: hashedPassword,
                firstName,
                lastName,
                phone
            }
            const user = await indusSignUp.create(responseData)
            const getToken = jwt.sign({ _id: user._id }, process.env.PRIVATE_KEY);
            const updatedUser = await indusSignUp.findOneAndUpdate({ _id: user._id }, { tokens: [{ token: getToken }] }, { new: true })

            res.status(201).send(updatedUser);
        }

    }
    catch (err) {
        console.log({ err })
        return res.status(500).send("Check your code again : " + err);
    }
}

module.exports.verifyLoginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userVerification = await indusSignUp.findOne({ email });

        if (await bcrypt.compare(password, userVerification.password)) {
            return res.send(userVerification);
        }
        return res.send({ status: false });

    }
    catch (err) {
        res.send({ status: false })
    }
}

module.exports.verifyJwtUser = async (req, res) => {

    try {
        const { token } = req.body;
        let result = await jwt.verify(token, process.env.PRIVATE_KEY);

        if (result)
            return res.send({ status: true });
    }
    catch (err) {
        return res.send({ status: false });
    }
}