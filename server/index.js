import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();  // express app instance

app.use('/posts', postRoutes);  // every route inside PostRoutes is going to start with posts

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = `mongodb+srv://fifo1175:pass123@flaskquicktrip.ugfso.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))) // javascript promise, goes on successful connection, console.log is the callback function
    .catch((error) => console.log(error.message));
