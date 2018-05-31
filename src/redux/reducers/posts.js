// src/redux/reducers/posts.js
const initialState = {
    posts: [],
    post: {}
}
export default (state=initialState, action) => {
    switch (action.type) {
        case 'LOAD_POSTS' :
            return {
                ...state,
                posts: action.posts
            }
        case 'VIEW_POST':
            return {
                ...state,
                post: action.post
            }
        case 'LIKE_POST':
            let post = Object.assign({}, state.post)
            post.likes++;
            return {
                ...state,
                post: post
            }
        default:
            return state;
    }
}