import express from "express";
import connectDB from "./db/connectdb.js";
import {join} from 'path'
import web from './roots/web.js'

const app = express();
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL ||'mongodb+srv://khushbu_bamroliya:khushi64@cluster0.nxyxghn.mongodb.net/test';

// database connection 
connectDB(DATABASE_URL)

// middleware
app.use(express.urlencoded({extended:false}))

// static file
app.use('/student',express.static(join(process.cwd(),"public")))
app.use('/student/edit',express.static(join(process.cwd(),"public")))

// set template engine
app.set("view engine","ejs")

// load routes
app.use("/student",web)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});



/// database table name : CRUD - students
/// link : http://localhost:3000/student/
/// npm run dev