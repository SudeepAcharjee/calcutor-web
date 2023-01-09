const expressionScreen = document.getElementById("expression");
const resultScreen = document.getElementById("result");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.value;

    if (!isNaN(value)) {
      if (resultScreen.innerText !== "0") {
        resultScreen.innerText = "0";
        expressionScreen.innerText = value;
      } else {
        expressionScreen.innerText += value;
      }
    } else if (value === ".") {
      if (!expressionScreen.innerText.includes(".")) {
        expressionScreen.innerText += value;
      }
    } else if (value === "clear") {
      expressionScreen.innerText = "0";
      resultScreen.innerText = "0";
    } else if (value === "=") {
      resultScreen.innerText = eval(expressionScreen.innerText);
    } else {
      expressionScreen.innerText += value;
    }
  });
});


