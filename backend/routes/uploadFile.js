const express = require('express');
const router = express.Router();
const {User} = require('../db/models')
const path = require('path');
const multer = require('multer');


const storageConfig = multer.diskStorage({
  destination: (req, file, cb) =>{
    
      cb(null, "./public/uploads");
  },
  filename: (req, file, cb) =>{
      cb(null, file.originalname);
  }
});
const upload = multer({storage:storageConfig});

router.route('/') 
.post (upload.single('file'), async (req, res) => {
  // const url = req.protocol + '://ikiro.ru';
  
  const url = req.protocol + '://' + req.get('host')
  console.log(url)
  const profileImg = url + '/uploads/' + req.file.filename;
  console.log(profileImg)
  const email = req.body.email;
  const user = await User.findOne({where: {email}})
  await user.update({Userphoto: profileImg})
  res.json(user)
  // res.json(createFile)
})


module.exports = router;






