// VIEWS in DJANGO - this is where the logic goes
const Message = require('./models');

module.exports ={
    index: function(req, res){
        all_messages = Message.find({}, function(err, message){
            res.render('index', {all_messages: message})
        })
    },
    create_message: function(req, res){
        Message.create({name: req.body.name, message: req.body.message})
            .then(()=>{
                return res.redirect('/');
            })
            .catch(err => res.json(err));
    },
    create_comment: function(req, res){
        Message.findOneAndUpdate({_id: req.body.id}, {$push: {comments_posted: req.body}})
            .then(()=>{
                return res.redirect('/');
            })
            .catch(err => res.json(err));
    }
}

// Associate comments with the correct message by using a hidden input. Also, in controller create_message, comments_posted pushes the whole object being created in the form. i.e. req.body.