const router = require('express').Router();
const usersRouter = require('./users-router');
const magicRouter = require('./magic-router');
router.use('/users', usersRouter);
router.use('/magic', magicRouter);
module.exports = router;
