const express = require('express');
const router = express.Router();
const { User } = require('../db/models');
const path = require('path');
const bcrypt = require('bcrypt')

router.route('/').post(async (req, res) => {
  // console.log(req.body.userinfo)
  const { name, email, password, phone, sity } = await req.body.userInfo;
  console.log(name, email, password, phone, sity)
  if (name && email && password && phone && sity) {
    try {
      const pass = await bcrypt.hash(password, 7);
      const editUser = await User.findOne({ where: { email } });
      await editUser.update({ email: email, City: sity, Name: name, Userphonenumber: phone, password: pass }, { returning: true, plain: true });
      editUser.password = password;
      console.log(editUser);
      return res.json(editUser)
    } catch (err) {
      return res.sendStatus(500)
    }
  }
  // console.log(name)
  // console.log(email);


});

module.exports = router;
