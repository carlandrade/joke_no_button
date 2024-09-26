document.addEventListener("DOMContentLoaded", () => {
  const noButton = document.getElementById("no-button");
  const yesButton = document.getElementById("yes-button");
  const resultMessage = document.getElementById("result-message");

  noButton.addEventListener("mouseover", () => {
    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    let newLeft = Math.random() * (containerRect.width - buttonRect.width);
    let newTop = Math.random() * (containerRect.height - buttonRect.height);

    noButton.style.position = "absolute";
    noButton.style.left = `${newLeft}px`;
    noButton.style.top = `${newTop}px`;
  });

  const showResultMessage = () => {
    resultMessage.classList.remove("hidden");
    yesButton.style.display = "none";
    noButton.style.display = "none";
  };

  yesButton.addEventListener("click", showResultMessage);
  noButton.addEventListener("click", showResultMessage);
});
