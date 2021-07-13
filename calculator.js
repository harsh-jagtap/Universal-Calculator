console.log('welcome to calculator');

// common logic
setInterval(() => {
    pythagoreanTheorem();
}, 1000);


// standard calculator
// resource for standard calculator
let standardCalculator = document.getElementsByClassName('standardCalculator');
let input = document.getElementById('input');
let button = document.querySelectorAll('button');
let sum = '';

// logic for standard calculator
function standardClac() {
    for (let item of button) {
        item.addEventListener('click', (e) => {
            buttonValue = e.target.innerText;
            if (buttonValue == "X") {
                buttonValue = "*";
                sum += buttonValue;
                input.value = sum;
            } else if (buttonValue == "AC") {
                sum = "";
                input.value = sum;
            } else if (buttonValue == "C") {
                sum = "";
                input.value = sum;
            } else if (buttonValue == "=") {
                input.value = eval(sum);
                setTimeout(() => {
                    sum = "";
                }, 1);
            } else {
                sum += buttonValue;
                input.value = sum;
            };
        });
    };
}


// pythagorean theorem
function pythagoreanTheorem() {
    // resource for pythagorean theorem
    let input2p1 = document.getElementById("input2p1").value;
    let input2p2 = document.getElementById("input2p2").value;

    // logic for pythagorean theorem
    let suboutputp1 = input2p1 * input2p1;
    let suboutputp2 = input2p2 * input2p2;
    let outcome2p1 = suboutputp1 + suboutputp2;
    let result2 = Math.sqrt(outcome2p1);

    // display pythagorean theorem
    let display2 = document.getElementById("2pT");
    display2.innerText = result2;
}