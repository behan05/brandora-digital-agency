const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const dbConnect = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`DB connected: ${dbConnect.connection.host}`)
    } catch (error) {
        console.error(`DB connection Error: ${error.message}`);
        process.exit(1); // exit when db not connect.
    }
};
module.exports = connectDB;

