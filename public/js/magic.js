const handleAnswer = async (event) => {
  event.preventDefault();
  try {
    const answerHTML = document.querySelector("#answer");
    answerHTML.classList.remove("animate__animated");
    answerHTML.classList.remove("animate__rollIn");
    answerHTML.innerHTML ='';
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

    answerHTML.classList.add("animate__animated");
    answerHTML.classList.add("animate__rollIn");
    answerHTML.innerHTML = data.answer;
    // answerHTML.removeAttribute("class");
    // answerHTML.setAttribute("class","animate__animated animate__rollIn");

  } catch (error) {
    console.log(error);
  }
};

document
  .querySelector(".question-form")
  .addEventListener("submit", handleAnswer);
