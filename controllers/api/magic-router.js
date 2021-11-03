const router = require("express").Router();
const withAuth = require("../../util/withAuth");
const { History } = require("../../models");
// const { User } = require("../../models");
const helper = require("../../util/helpers");

// client post question: POST req from form AND from LINK on 8ball

router.put("/magic", withAuth, async (req, res) => {
  const question = req.params;
  console.log(question);
  try {
    // save question in history db


   const question_db = await History.update({ question: question }, {
    
    where: {
      user_id: req.session.userId,
    },
  });
console.log(question_db);
    // get answer from helpers.js

    const answer = helper;

    // save answer to history db

const answer_db =  await History.update({ answer: answer }, {
    
    where: {
      user_id: req.session.userId,
    }}); 
console.log(answer_db);
    // send answer to magic.handlebars

    res.send(answer);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
