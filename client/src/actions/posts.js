import * as api from '../api'; // import everything from actions as api

// Action Creators that return an action

export const getPosts = () => async (dispatch) => {  // use async (dispatch) from redux-thunk to dispatch it asynchronysly
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message);
    }
}


export const createPost = (post) => async (dispatch) => {  {/* recieve the post as parameter to send as param to createPost */}
    try {
        const { data } = await api.createPost(post); {/* making a post api request to the backend server*/}

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}