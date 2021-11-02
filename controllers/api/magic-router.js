const router = require('express').Router();
const { User } = require('../models');
const withAuth = require("../util/withAuth");

router.get('/magic', withAuth, async (req, res) => {
    try {
      let user;
      if (req.session.isLoggedIn) {
        user = await User.findByPk(req.session.userId, {
          exclude: ['password'],
          raw: true,
        });
      }
      res.render('magic', {
        title: 'Ask, and Ye Shall Receive!',
        isLoggedIn: req.session.isLoggedIn,
        user,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('⛔ Uh oh! An unexpected error occurred.');
    }
  });

  module.exports = router;