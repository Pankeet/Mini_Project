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
    address : String , 
} , {timestamps : true });

// User 's Purchases
const Purchases = new Schema({
    ItemId : ObjectId ,
    modelNo : {type : String , unique : true},
    price : Number ,
    userId : ObjectId,
})

// Shoes  
const soles = new Schema({
    modelNo : {type : String , unique : true},
    colors : String,
    price : Number ,
    country_of_origin : String ,
})

// Create Models
const UserModel = mongoose.model('users' , user);
const UserPurchaseModel = mongoose.model('Purchases' , Purchases);
const SolesModel = mongoose.model('soles' , soles);

// Export the User Model 
module.exports = {
    UserModel , UserPurchaseModel , SolesModel
}