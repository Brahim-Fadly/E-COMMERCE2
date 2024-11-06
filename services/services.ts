import { newModel } from "../models/usermodel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
// function register :

interface registerparams{
firstName:string,
lastName:string,
email:string,
password:string

}

export const registers = async ({firstName,lastName, email,password }:registerparams)=>{
 const finduser = await newModel.findOne({email});
 if(finduser){
    return {data:"email is already", statusCode:400}
 }
const hashpassword = await bcrypt.hash(password, 10) 
const newuser = new newModel({ firstName, lastName, email, password:hashpassword })
await newuser.save()
return {data:generate({firstName, lastName, email}), statusCode:200};
}

//function login user :

interface loginparams{
    email:string,
    password:string
    
    }

export const Login = async ({email, password}: loginparams)=>{
const finduser = await newModel.findOne({email});
if(!finduser){
    return {data:"email is already", statusCode:400}
}
const passwordmatch = await bcrypt.compare(password,finduser.password);
if(passwordmatch){
    return {data:generate({email,firstName:finduser.firstName, lastName:finduser.lastName}),statusCode:200};
}
return {data:"email is already", statusCode:400}
    
}


// function generate JWT :
const generate = (data:any)=>{
    return jwt.sign(data, "fbf4b4gbgnbgnuhgy987f989g54fn4n4546g5ff4vfd")
  
  }
  