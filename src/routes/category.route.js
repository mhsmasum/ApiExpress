const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');
const multer  = require('multer');
// const lodash = require('lodash');
const storage = multer.diskStorage({
    destination:  (req, file, cb) => {
     
      cb (null, 'uploads/');  
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);
      cb(null, file.originalname+'-'+Date.now()+'.jpg');
    }
    
  });

  const upload = multer({storage});
router.get('/' ,function (req  , res) {
    res.send('Hello World');
});
router.get('/test' , categoryController.test); 
router.post('/create' , upload.single('image'), categoryController.createnew);   
// router.post('/create' , upload.single('image'),function (req  , res) {
//     // console.dir(req);
//     // const file = req.files.file;
//    console.log(req.body);
//     res.send('Hello World');
// });   

module.exports = router;