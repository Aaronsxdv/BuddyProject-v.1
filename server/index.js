import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
const app = express();
app.use(cors());
app.use('/posts',postRoutes);

app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));


const CONNECTION_URL = 'mongodb+srv://fiendblooded:mortalkombat35@cluster0.vkohu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;//port var

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => app.listen(PORT,() => console.log(`Server running on port: ${PORT}`))) //if successful connection
    .catch((err) => console.log(err.message));  //if not
mongoose.set('useFindAndModify',false); //no warning in the console

