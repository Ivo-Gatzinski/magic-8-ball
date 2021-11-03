const handleAnswer = async (event) => {
  event.preventDefault();
  try {
    const question = document.querySelector("#question").value.trim();
    const response = await fetch("/api/magic", {
      method: "POST",
      body: JSON.stringify({ question }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      alert("Failed to submit question.");
      return;
    }

    const data = await response.json();

    const answerHTML = document.querySelector("#answer");
    answerHTML.innerHTML = data.answer;
  } catch (error) {
    console.log(error);
  }
};

document
  .querySelector(".question-form")
  .addEventListener("submit", handleAnswer);
