function generator() {
  const answers = [
    "Yes!",
    "No!",
    "Go Do It!",
    "Very Doubtful!",
    "No Way!",
    "Just Do it!",
    "Whatever",
    "Not Sure",
    "Your Mom would want you to do it!",
    "Do!",
    "Do not!",
    "Who Cares",
    "The Asteroid is coming, so go for it!",
    "Just don't let anyone see you!",
    "Ask Again",
    "Beg your pardon?",
  ];
  const random = Math.floor(Math.random() * answers.length);
  const answer = answers[random];
  return answer;
}

module.exports = generator;