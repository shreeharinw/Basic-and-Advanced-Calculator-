let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.innerText);
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "=":
        if (display.innerText == "") {
          alert("no value entered!!");
        } else {
          try {
            display.innerText = eval(display.innerText);
          } catch {
            display.innerText = "Error";
          }
        }
        break;
      case "Backspace":
        if (display.innerText) {
          display.innerText = display.innerText.substring(
            0,
            display.innerText.length - 1
          );
        }
        break;
      default: {
        display.innerText += e.target.innerText;
      }
    }
  });
});
