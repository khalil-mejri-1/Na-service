const mongoose = require("mongoose");

const conatctSchema = new mongoose.Schema({

    nom:String,
    email:String,
    tlf:String,
    msg:String


 
});

const Contact = mongoose.model("contact", conatctSchema);

module.exports = Contact;
