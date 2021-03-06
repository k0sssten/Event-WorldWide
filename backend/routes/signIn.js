const {Router} = require('express');
const router = Router();
const bcrypt = require('bcrypt');
const {User} = require('../db/models');

router.route('/')
.get((req, res) => {
  if (req.query.err) res.locals.err = 'Incorrect login or password';
  res.send('Incorrect login or password')
})
.post(async(req, res) => {
  const {email, password} = req.body;
  if (email && password) {
    const currentUser = await User.findOne({where:{email}});
    if (currentUser && await(bcrypt.compare(password, currentUser.password))) {
      req.session.user = {id:currentUser.id, name:currentUser.Name};
      return res.json({id: currentUser.id, email: currentUser.email, Name: currentUser.Name, City: currentUser.City, phone: currentUser.Userphonenumber, password: password, Userphoto: currentUser.Userphoto})
    } else {
      return res.sendStatus('400')
    }
  } else {
    return res.sendStatus('401')
  }
})

module.exports = router;
