import express from "express";
import mongoose from "mongoose";
import router from "../Routes/userRoutes"

const app = express();
const port = 2000;
//midllware :
app.use(express.json())

//connect express with mongodb :
mongoose.connect("mongodb://localhost:27017/E-COMMERCE2").then(()=>{
console.log("mongoose has connected....")
}).catch((err)=>{
   console.log("connect is failed :",err)
})
//connect page routes
app.use("/users2", router)

//listen to server :
app.listen(port,()=>{
console.log(`Running server at : http://localhost:${port}`)

})