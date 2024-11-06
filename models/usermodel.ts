import mongoose, {Schema, Document} from "mongoose";

export interface interUser extends Document{
firstName:string,
lastName:string,
email:string,
password:string

}

//create schema :
const newSchema = new Schema<interUser>({

firstName:{type:String, required:true},
lastName:{type:String, required:true},
email:{type:String, required:true},
password:{type:String, required:true}

})

export const newModel = mongoose.model<interUser>("users2",newSchema)