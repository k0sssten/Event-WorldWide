const express = require('express');
const db = require('../db/models');

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      const allSubscribes = await db.Subscribe.findAll({include: [db.User, db.Event]})
      return res.json(allSubscribes).status(200);
    } catch (error) {
      return res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
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
        const newSubscribe = await db.Subscribe.create({ Eventid: newEvent.id },{ returning: true, plain: true })
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




