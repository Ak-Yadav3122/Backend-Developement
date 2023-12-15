// This is used for as early as possible in our application, import and configure dotenv for every components 
// and this is used on that file which are executed firstely :

// require("dotenv").config({path:"./env"}) =>this show error because in es6 require are not using

import 'dotenv/config'
import connectDB from "./db/index.js";



connectDB()






















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