import mongoose from 'mongoose';
//give some uniformity to our documents using mongoose wiht a schema
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String], // array of strings
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createAt: {
        type: Date,
        default: new Date()
    },
});


const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;