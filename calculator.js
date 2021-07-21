console.log('welcome to calculator');

// 1. Standard Calculator
function standardCalculator() {
    // resource for standard calculator
    let input = document.querySelector('#input1');
    let output1 = document.querySelector("#output1");

    // logic for standard calculator
    setInterval(() => {
        let result1p1 = eval(input.value);
        if (result1p1 == undefined) {
            result1p1 = 0;
        }
        output1.innerText = result1p1;
    }, 100);
}
standardCalculator();

// 2. Pythagorean Theorem : Hypotenuse
function pythagoreanHypotenuse() {
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
function repeatingPythagoreanHypotenuse() {
    setInterval(() => {
        pythagoreanHypotenuse();
    }, 100);
}

// 3. Square Root
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

// 4. Square
// resource for square
function square() {
    let input4 = document.getElementById("input4");
    let result4 = Math.pow(input4.value, 2);
    let output4 = document.getElementById("output4");
    output4.innerText = result4;
}
// reapeating square
function reapeatingSquare() {
    setInterval(() => {
        square();
    }, 100);
}


// 5. Power
// resource for square
function power() {
    let input5p1 = document.getElementById("input5p1");
    let input5p2 = document.getElementById("input5p2");
    let output5 = document.getElementById("output5");

    // logic
    let result5 = Math.pow(input5p1.value, input5p2.value);
    output5.innerHTML = `Power of <span> ${input5p1.value}<sup class="super5">${input5p2.value} </sup> </span> = ${result5}<span></span>`
}
// reapeating square
function reapeatingPower() {
    setInterval(() => {
        power();
    }, 100);
}



// 6. Pythagorean Theorem : Side
function pythagoreanSide() {
    // resource for pythagorean theorem
    let input6p1 = document.getElementById("input6p1").value;
    let input6p2 = document.getElementById("input6p2").value;

    // logic 
    let result6p1 = Math.pow(input6p1, 2) - Math.pow(input6p2, 2);
    let finalResult6 = Math.sqrt(result6p1);

    if (isNaN(finalResult6)) {
        finalResult6 = "Read Tips";
    }

    // display pythagorean theorem
    let display6 = document.getElementById("output6");
    display6.innerText = finalResult6;
}
// repeating pythagorean theoream
function repeatingPythagoreanSide() {
    setInterval(() => {
        pythagoreanSide();
    }, 100);
}


// 7. Area : Square
function areaSquare() {
    let input7 = document.getElementById("input7");
    let output7 = document.getElementById("output7");

    // logic
    let result7 = Math.pow(input7.value, 2);
    output7.innerText = result7;
}
// reapeating area of square
function reapeatingAreaSquare() {
    setInterval(() => {
        areaSquare();
    }, 100);
}

// 8. Area : Rectangle
function areaRectangle() {
    let input8p1 = document.getElementById("input8p1");
    let input8p2 = document.getElementById("input8p2");
    let output8 = document.getElementById("output8");

    // logic
    let result8 = input8p1.value * input8p2.value;
    output8.innerText = result8;
}
// reapeating area of Rectangle
function reapeatingAreaRectangle() {
    setInterval(() => {
        areaRectangle();
    }, 100);
}


// 9. Area : Triangle
function areaTriangle() {
    let input9p1 = document.getElementById("input9p1");
    let input9p2 = document.getElementById("input9p2");
    let output9 = document.getElementById("output9");

    // logic
    let result9p1 = input9p1.value * input9p2.value;
    let result9p2 = result9p1 / 2;
    output9.innerText = result9p2;
}
// reapeating area of Triangle
function reapeatingAreaTriangle() {
    setInterval(() => {
        areaTriangle();
    }, 100);
}


// 10. Area : Circle
function areaCircle() {
    let input10 = document.getElementById("input10");
    let output10 = document.getElementById("output10");

    // logic
    let result10 = Math.PI * Math.pow(input10.value, 2);
    output10.innerText = result10;
}
// reapeating area of Circle 
function reapeatingAreaCircle() {
    setInterval(() => {
        areaCircle();
    }, 100);
}


// 11. Area : Parallelogram
function areaParallelogram() {
    let input11p1 = document.getElementById("input11p1");
    let input11p2 = document.getElementById("input11p2");
    let output11 = document.getElementById("output11");

    // logic
    let result11 = input11p1.value * input11p2.value;
    output11.innerText = result11;
}
// reapeating area of Parallelogram
function reapeatingAreaParallelogram() {
    setInterval(() => {
        areaParallelogram();
    }, 100);
}


// 12. Area : Trapezium
function areaTrapezium() {
    let input12p1 = Number(document.getElementById("input12p1").value);
    let input12p2 = Number(document.getElementById("input12p2").value);
    let input12p3 = Number(document.getElementById("input12p3").value);
    let output12 = document.getElementById("output12");

    // logic
    let result12p1 = input12p1 + input12p2;
    let result12p2 = result12p1 * input12p3;
    let result12p3 = result12p2 / 2;
    output12.innerText = result12p3;
}
// reapeating area of Parallelogram
function reapeatingAreaTrapezium() {
    setInterval(() => {
        areaTrapezium();
    }, 100);
}



// Selecting System (ss) 
// resource for selecting system
let select = document.querySelector(".select");

// logic for selecting system
select.addEventListener("change", function() {
    if (select.value == "standardCalculator") {
        standardCalculator();
    } else if (select.value == "pythagoreanHypotenuse") {
        repeatingPythagoreanHypotenuse();
    } else if (select.value == "pythagoreanSide") {
        repeatingPythagoreanSide();
    } else if (select.value == "squareroot") {
        repeatingSquareRoot();
    } else if (select.value == "square") {
        reapeatingSquare();
    } else if (select.value == "power") {
        reapeatingPower();
    } else if (select.value == "areaSquare") {
        reapeatingAreaSquare();
    } else if (select.value == "areaRectangle") {
        reapeatingAreaRectangle();
    } else if (select.value == "areaTriangle") {
        reapeatingAreaTriangle();
    } else if (select.value == "areaCircle") {
        reapeatingAreaCircle();
    } else if (select.value == "areaParallelogram") {
        reapeatingAreaParallelogram();
    } else if (select.value == "areaTrapezium") {
        reapeatingAreaTrapezium();
    }
})