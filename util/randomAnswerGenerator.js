function generator () {
  const answers=['Yes!','No!','Go Do It!','Very Doubtful!', 'No Way!'];
  const random = Math.floor(Math.random() * answers.length);
  const answer = answers[random];
  return answer;
}

// const answer = generator();
// console.log(answer);
module.exports = generator;
