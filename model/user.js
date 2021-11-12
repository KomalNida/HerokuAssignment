
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const reqString = {
  type: String,
  required: true
}

const reqNumber = {
  type: Number,
  required: true
}

const reqDate = {
  type: Date,
  required: true
}


const UserSchema = new Schema({

  id: reqNumber,  
  name: reqString,
  phone: reqNumber,
  email: reqString,
  username: reqString,
  password: reqString,
  cpassword: reqString,

});




module.exports = mongoose.model('User', UserSchema);