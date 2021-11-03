const router = require("express").Router();
const withAuth = require("../../util/withAuth");
const { History } = require("../../models");
const helper = require("../../util/helpers");


router.post("/", withAuth, async (req, res) => {
  
  const question = req.body.question;
  
  try {
    const user_id = req.session.userId;
    const answer = helper;
  
   const history = await History.create({
      question: question,
      answer: answer,
      user_id: user_id,
    });

    res.json(history);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
