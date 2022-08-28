let input = document.getElementById("display");

function addChar(character) {
  if (input.innerText == null || input.innerText == "0")
    input.innerText = character;
  else input.innerText += character;
}

function cos() {
  if (input.innerText == "") alert("No value entered!!");
  else input.innerText = Math.cos(input.innerText);
}

function sin() {
  if (input.innerText == "") alert("No value entered!!");
  else input.innerText = Math.sin(input.innerText);
}

function tan() {
  if (input.innerText == "") alert("No value entered!!");
  else input.innerText = Math.tan(input.innerText);
}

function sqrt() {
  if (input.innerText == "") alert("No value entered!!");
  else input.innerText = Math.sqrt(input.innerText);
}

function ln() {
  if (input.innerText == "") alert("No value entered!!");
  else input.innerText = Math.log(input.innerText);
}

function exp() {
  if (input.innerText == "") alert("No value entered!!");
  else input.innerText = Math.exp(input.innerText);
}

function deleteChar() {
  input.innerText = input.innerText.substring(0, input.innerText.length - 1);
}

function changeSign() {
  if (input.innerText.substring(0, 1) == "-")
    input.innerText = input.innerText.substring(1, input.innerText.length);
  else input.innerText = "-" + input.innerText;
}

function compute() {
  if (input.innerText == "") alert("No value entered!!");
  else {
    try {
      input.innerText = eval(input.innerText);
    } catch {
      input.innerText = "Error";
    }
  }
}

function square() {
  if (input.innerText == "") alert("No value entered!!");
  else input.innerText = eval(input.innerText) * eval(input.innerText);
}

function clearDisplay() {
  input.innerText = "";
}
function checkNum() {
  var str = input.innerText;
  for (var i = 0; i < str.length; i++) {
    var ch = str.substring(i, i + 1);
    if (ch < "0" || ch > "9") {
      if (
        ch != "/" ||
        ch != "*" ||
        ch != "+" ||
        ch != "-" ||
        ch != "." ||
        ch != "(" ||
        ch != ")"
      ) {
        alert("invalid entry!");

        return false;
      }
    }
  }
  return true;
}
