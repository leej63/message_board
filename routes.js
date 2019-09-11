const controller = require("./controller")

module.exports = function(app){
    app.get('/', controller.index)
    app.post('/post_message', controller.create_message)
    app.post('/post_comment', controller.create_comment)
}