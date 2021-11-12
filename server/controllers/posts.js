// handlers for our routes
// executes the logic for our routes so the routes stay nice and clean
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();  // finding something in the model takes time, so its an asynchronous action, so add await

        res.status(200).json(postMessages);

    } catch (error) {
        res.status(404).json({ message: error.message} );
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save(); // async action

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}