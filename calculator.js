console.log('welcome to calculator');

// Standard Calculator
// resource for standard calculator
let standardCalculator = document.getElementsByClassName('standardCalculator');
let input = document.getElementById('input1');
let button = document.querySelectorAll('button');
let sum = '';

// logic for standard calculator
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

// Pythagorean Theorem
function pythagoreanTheorem() {
    // resource for pythagorean theorem
    let input2p1 = document.getElementById("input2p1").value;
    let input2p2 = document.getElementById("input2p2").value;

    // logic for pythagorean theorem
    let result2 = Math.hypot(input2p1, input2p2);

    // display pythagorean theorem
    let display2 = document.getElementById("2pT");
    display2.innerText = result2;
}
// repeating pythagorean theoream
function repeatingPytha() {
    setInterval(() => {
        pythagoreanTheorem();
    }, 100);
}

// Square Root
function squareRoot(params) {
    // resource for square root
    let squareroot = document.querySelector("#input3");
    let display3 = document.querySelector("#output3");

    // logic for square root
    let result3 = Math.sqrt(squareroot.value);
    display3.innerText = result3;
}
// repeating square root
function repeatingSquareRoot() {
    setInterval(() => {
        squareRoot();
    }, 100);
}

// Square
// resource for square
function square() {
    let input4 = document.getElementById("input4");
    let result4 = Math.pow(input4.value, 2);
    let output4 = document.getElementById("output4");
    output4.innerText = result4;
}

function reapeatingSquare(params) {
    setInterval(() => {
        square();
    }, 100);
}


// Selecting System (ss) 
// resource for selecting system
let select = document.querySelector(".select");

// logic for selecting system
select.addEventListener("change", function() {
    if (select.value == "pythagoreanTheorem") {
        repeatingPytha();
    } else if (select.value == "squareroot") {
        repeatingSquareRoot();
    } else if (select.value == "square") {
        reapeatingSquare();
    }
})