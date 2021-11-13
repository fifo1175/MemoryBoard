export default (posts = [], action) => {  // exporting to combineReducers in index.js
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;

        case 'CREATE':
            return [...posts, action.payload]; {/* spread all the posts, then add new post that is stored in action.payload */}
    
        default:
            return posts;
    }
}