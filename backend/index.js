//imported express 
import express from 'express';
//import mongoose
import mongoose from 'mongoose';
//import local file
import {PORT,monURL} from './config.js';
//import route 
import route from "../backend/routes/approutes.js"
//import cors
import cors from 'cors';

//init express
const app=express();
 
//bulit-in middleware in express (v4)
app.use(express.json());

//cors middleware 
app.use(cors({ 
    origin:"https://localhost:3000",
    methods:['POST','GET','PUT','DELETE'],
    allowedHeaders:['Content-Type'],
}))


//route definition
app.get("/",(res,req)=>{ 
    return res.status(234).send("welcome to mern stack");
})

//to use the route 
app.use("/route",route)

//init mongoose 
mongoose.connect(monURL)
.then(()=>{
    app.listen(PORT,()=>{ 
        console.log("Listening to port");  
    })
})
.catch((err)=> {
    console.log("err in connecting mongodb");
})