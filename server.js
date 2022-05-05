const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose')
const app = express();


// Connect to DB
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`.bgCyan.underline.bold)
        
    } catch (err) {
        console.log(`Error: ${err.message}`.bgRed.underline.bold)
        process.exit(1);
    }
}
connectDB();
app.use(express.json({limit: '500mb', extended: false}))








app.listen(PORT, () => console.info(`SERVER STARTED ON PORT ${PORT}`.bgCyan.underline.bold))
