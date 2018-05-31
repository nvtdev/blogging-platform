// server/routes/post.js
const postController = require('./../controllers/post.ctrl')
const multipart = require('connect-multiparty')
const multipartWare = multipart()
module.exports = (router) => {
    /**
     * get all posts
     */
    router
        .route('/posts')
        .get(postController.getAll)
    /**
     * add an post
     */
    router
        .route('/post')
        .post(multipartWare, postController.addPost)
    /**
     * comment on an post
     */
    router
        .route('/post/comment')
        .post(postController.commentPost)
    /**
     * get a particlular post to view
     */
    router
        .route('/post/:id')
        .get(postController.getPost)
}