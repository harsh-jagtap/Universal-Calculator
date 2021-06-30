console.log('welcome to calculator');

let button = document.querySelectorAll('button');
let outcome = document.getElementById('input');
let div = document.getElementsByClassName("button")
let sum = '';

for (let item of button) {
    item.addEventListener('click', (e) => {
        buttonValue = e.target.innerText;
        if (buttonValue == "X") {
            buttonValue = "*";
            sum += buttonValue;
            outcome.value = sum;
        } else if (buttonValue == "AC") {
            sum = "";
            outcome.value = sum;
        } else if (buttonValue == "C") {
            sum = "";
            outcome.value = sum;
        } else if (buttonValue == "=") {
            outcome.value = eval(sum);
            setTimeout(() => {
                sum = "";
            }, 1);
        } else {
            sum += buttonValue;
            outcome.value = sum;
        }
    });
}