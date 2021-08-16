const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const {User} = require('../db/models')


router
.route('/')
.get(async (req, res) => {
  res.send('123').end();
})
.post(async (req, res) => {
  const {userName, email, password, city, phone} = req.body;
  if (userName && email && password && city && phone) {
    try {
      const pass = await bcrypt.hash(password, 7);
        const createUser = await User.create({email, password: pass, Name: userName, City: city, Userphonenumber: phone}, {returning: true, plain: true});
        req.session.user = {id: createUser.id, name: createUser.Name};
        console.log(req.session.user);
        return res.json({id: createUser.id, email: createUser.email, Name: createUser.Name, City: createUser.City, phone: createUser.Userphonenumber, password: password,  Userphoto: createUser.Userphoto})
      } catch (error) {
        return res.sendStatus(500)
      }
    }
  return res.sendStatus(400)
})

module.exports = router;
