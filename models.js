// MODELS
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/message_board', {useNewUrlParser: true});

const CommentSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Need to provide a name"]},
    comment: {type: String, required: [true, "Field may not be empty"]}
}, {timestamps:true})

const MessageSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Need to provide a name"]},
    message: {type: String, required: [true, "Field may not be empty"]},
    comments_posted: [CommentSchema]
}, {timestamps:true})

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;



