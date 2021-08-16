const express = require('express');
const db = require('../db/models');

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      // console.log('ya tutu');
      // const allSubscribes = await db.Subscribe.findAll({
      //   where: { Userid: req.session.user.id }, include: [db.User, db.Event],
      // });
      const allSubscribes = await db.Subscribe.findAll({include: [db.User, db.Event]})
      console.log('fav--->', allSubscribes);
      return res.json(allSubscribes).status(200);
    } catch (error) {
      return res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    console.log('sessia---->', req.session.user);
    try {
      const {
        Picture, Url, Name, Startdatetime, location
      } = req.body;
      
      if (Picture && Url && Name && Startdatetime, location) {
        const newEvent = await db.Event.create(
          {
            Picture, Url, Name, Startdatetime, Category: location.lat, Genre: location.lon
          },
          { returning: true, plain: true },
        );
        
        // console.log('session---->', req.session.user);
        // const newSubscribe = await db.Subscribe.create({ Userid: req.session.user.id, Eventid: newEvent.id },{ returning: true, plain: true })
        const newSubscribe = await db.Subscribe.create({ Eventid: newEvent.id },{ returning: true, plain: true })

        // console.log(newSubscribe);
        return res.status(201).json(newSubscribe);
      }
      return res.sendStatus(406);
    } catch (error) {
      return res.sendStatus(500);
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.body;
      if (id) {
        await db.Subscribe.destroy({
          where: { id },
        });
        return res.sendStatus(200);
      }
      return res.sendStatus(418);
    } catch (error) {
      return res.sendStatus(500);
    }
  })


module.exports = router;




// const newEvent = await db.Event.create({
//   Name: req.body.Name,
//   Url: req.body.Url,
//   Picture: req.body.Picture,
//   Startdatetime: req.body.Startdatetime
// })
