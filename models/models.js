const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let pokemonGoSchema = new Schema({
  name : {
    type : String,
    required : true
  },
  nickName : {
    type : String,
    required: false
  },
  type : {
    type : [String],
    required : true
  },
  isAWonder : {
    type : Boolean,
    default : false,
    required : true
  },
  combatPoints : {
    type : Number,
    required : true
  },
  dateCaught : {
    type : Date,
    default : Date.now
  }
});
module.exports = mongoose.model('Pokemon', pokemonGoSchema);
