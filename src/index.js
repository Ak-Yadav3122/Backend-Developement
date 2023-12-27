// This is used for as early as possible in our application, import and configure dotenv for every components 
// and this is used on that file which are executed firstely :

// require("dotenv").config({path:"./env"}) =>this show error because in es6 require are not using

import 'dotenv/config'
import connectDB from "./db/index.js";
import { app } from './app.js';

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("ERROR",error);
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGODB Connection Faild !!!",err);
})






















// ---------------------First method for connection of database by using Efi method------------------

//(async ()=>{
// try {
//      await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
// } catch (error) {
//     console.log("ERROR: ", error);
//     throw error
// }
// })()           


// -------------------------SOME BASIC INFORMATION---------------------


// when we connect database always use try catch method 
// use of efi method= (function {})() one() is for functinon and other() is for emediately envoke kar do
// we are alwayse use the .use method when we are using middlewares.