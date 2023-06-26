let result = document.getElementById("result");
        
function addNumber(num) {
  result.value += num;
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function clearResult() {
  result.value = "";
}

function calculate() {
  result.value = eval(result.value);
}

function operate(op) {
  result.value += op;
}
