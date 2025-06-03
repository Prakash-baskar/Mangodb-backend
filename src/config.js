const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb+srv://prakashbaskar67:Pks672000@auth.mm5wwsr.mongodb.net/?retryWrites=true&w=majority&appName=Auth');

connect.then(() => {
    console.log("Connected to MongoDB successfully");
})
.catch( () =>{
    console.error("Error connecting to MongoDB");
})

const LoginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
     
    },
    password: {
        type: String,
        required: true
    }
});

const collection = new mongoose.model("product", LoginSchema);

module.exports = collection;