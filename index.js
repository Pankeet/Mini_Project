const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const { userRouter } = require('./routes/user');

app.use(cors());
app.use(express.json());

app.use('/user', userRouter );

async function main(){
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(1011);
    console.log("Listening to Mongo_DB");
}

main();
