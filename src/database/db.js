const mongoose = require("mongoose");

const connectDB = async () => {

    await mongoose.connect('mongodb+srv://arslanasad0101_db_user:AY4Au4VNewepr0XR@practice-database.1r2ez7y.mongodb.net/practice')

    console.log('Connected to MongoDB');
}

module.exports = connectDB;