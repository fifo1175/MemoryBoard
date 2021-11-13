import axios from 'axios';

const url = 'http://localhost:5000/posts'; // returns all the posts in the database

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);