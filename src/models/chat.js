const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    chatId:{
        type: String
    },
    requestId:{
        type: String
    },
    patientId:{
        type: String
    },
    doctorId:{
        type: String
    },
    patientName:{
        type: String
    },
    doctorName:{
        type: String
    }
});

//Export all within the class
module.exports = mongoose.model("Chat", chatSchema);