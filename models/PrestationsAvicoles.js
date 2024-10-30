// models/data.js
const mongoose = require("mongoose");

const PrestationsAvicolesSchema = new mongoose.Schema({

    selectCategory:String,
    email:String,
    img:String


 
});

const PrestationsAvicoles = mongoose.model("PrestationsAvicole", PrestationsAvicolesSchema);

module.exports = PrestationsAvicoles;
