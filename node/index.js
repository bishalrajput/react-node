// import express from "express";
// const app=express();

// app.use(express.json());
// //get post put delete
// app.post("/post",(req,res)=>{
//     //res.send("hello");
//     const data=req.body;
//     res.send(data);

// });
// app.listen(5500,()=>{
//     console.log("The server is running on port 5500")
// });
import express from 'express'
import postRoute from "./routers/postRoute.js"

const app = express();

app.use(express.json());
app.use("/", postRoute);


app.listen(5500, ()=>{
    console.log('server is running on port 5500');
})