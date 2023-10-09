const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connection successfully!!!!');
}).catch((err) => {
    console.log(err)
});
