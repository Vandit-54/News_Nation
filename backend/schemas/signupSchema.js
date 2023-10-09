const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const signupSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
        tokens:[
            {
                token:{
                    type:String,
                    required:true
                },
                _id:false
            }
        ]
    },
    {
        timestamps: true
    }
);

signupSchema.methods.generateAuthToken = async function()
{
    try
    {
        const getToken = jwt.sign({_id:this._id},process.env.PRIVATE_KEY);
        this.tokens = this.tokens.concat({token:getToken});
        await this.save();
        return getToken;
    }
    catch(err)
    {
        return err
    }
}

module.exports = mongoose.model('indus123',signupSchema);