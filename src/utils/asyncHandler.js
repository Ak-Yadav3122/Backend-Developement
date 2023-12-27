// By using promise 
// In high order function it accept the function as a method and also return the function.

const asyncHandler = (requstHandler)=>{ 
     return (req,res,next)=>{
        Promise.resolve(requstHandler(req,res,next))
        .reject((err) =>next(err))
    }
}

export {asyncHandler}












//By using async await method

//const asyncHandler = () => {}
//const asyncHandler = (fun) =>() => {}
// This is higher function,Higher function is function which take another function as a parameter and return the function as it self. 

//If we make async then we use async method and try, catch method
//const asyncHandler = (fun) =>async() => {}


// const asyncHandler = (func)=>async(req,res,next)=>{
//     try{
//        await func(req,res,next)
//     }
//     catch(errror){
//        res.status(errror.code || 500).json({
//         success : false,
//         message:errror.message
//        })
//     }
// }

// export {asyncHandler}