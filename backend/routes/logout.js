const { Router } = require('express');
const router = Router();

router.route('/').get(async (req, res) => {
  console.log(req.session.user);
  req.session.destroy((err) => {
    if (err) return res.sendStatus(500);
    res.clearCookie(req.app.get('cookieName'));

    return res.sendStatus(200);
  });
});

module.exports = router;
