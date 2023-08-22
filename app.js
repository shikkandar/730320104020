import express from 'express';;
import trainRoutes from './routes/trainRoutes.js';
import connectDB from "./db/connectDB.js";

const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/accountDB";

const app = express();

//Connects to the MongoDB Database
connectDB(DATABASE_URL);  

// Set up middleware for JSON parsing
app.use(express.json());

app.use(express.urlencoded({ extended: true }));



app.use('/train', trainRoutes);


app.listen('3002',(req, res)=>{
   console.log('Server connected Successfully');
})