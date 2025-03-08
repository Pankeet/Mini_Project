const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

require('dotenv').config();

mongoose.connect(process.env.MONGO_URL);

// User Schema 
const user = new Schema({
    email : {type : String , unique : true},
    password : String ,
    fullName : String ,
    phoneNum : {type: Number , unique:true} , 
    address : String 
})

// Shoes 
const soles = new Schema({
    modelNo : {type : String , unique : true},
    color : String,
    country_of_origin : String 
})

const UserModel = mongoose.model('users' , user);
// Export the User Model 
module.exports = {
    UserModel
}