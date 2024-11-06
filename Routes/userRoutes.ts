import express from "express";
import {Login, registers} from "../services/services"

const router = express.Router();

//function register :
router.post("/registers", async (request,response)=>{
const { firstName, lastName, email, password} = request.body;
const { statusCode , data} = await registers({firstName, lastName, email, password});
response.status(statusCode).send(data)

})
// function login :

router.post("/Login", async (request, response)=>{
    const { email, password} = request.body;
    const { statusCode , data} = await Login({ email, password});
    response.status(statusCode).send(data)


})


export default router;




