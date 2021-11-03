const router = require('express').Router();
const { User, History } = require('../models');
const withAuth = require('../util/withAuth');

// use withAuth middleware to redirect from protected routes.
// const withAuth = require("../util/withAuth");

// example of a protected route
// router.get("/users-only", withAuth, (req, res) => {
//   // ...
// });

router.get('/', async (req, res) => {
  try {
    let user;
    if (req.session.isLoggedIn) {
      user = await User.findByPk(req.session.userId, {
        exclude: ['password'],
        raw: true,
      });
    }
    res.render('home', {
      title: 'Home Page',
      isLoggedIn: req.session.isLoggedIn,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('⛔ Uh oh! An unexpected error occurred.');
  }
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'Log-In Page' });
});

router.get('/signup', (req, res) => {
  res.render('signup', { title: 'Sign-Up Page' });
});

router.get('/history', withAuth, async (req, res) => {
  // res.render('history', {title: 'History Page'});
  try {
    const user = await User.findByPk(req.session.userId, {
      exclude: ['password'],
      
      include: [
        {
          model: History,
          attributes: [
            'id',
            'date',
            'question',
            'answer',
          ],
        },
      ],
    });
    // res.send(JSON.stringify(user));
    const userData = user.get({ plain: true });
    res.render('history', {
      title: 'History Page',
      isLoggedIn: req.session.isLoggedIn,
      user: userData
    });

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
