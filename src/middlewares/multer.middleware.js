import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {  // cb is shortcut of callback
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {

      cb(null, file.originalname)
    }

})
  
 export const upload = multer(
    { 
     storage: storage
    }) // we are using ES6 then we also write it as a[ storage: storage === storage ] both are same.








  // In multer we also handle or access the file but in express we only access the JSON data.