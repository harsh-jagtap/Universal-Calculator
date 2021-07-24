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
    let input3 = document.querySelector("#input3");
    let display3 = document.querySelector("#output3");

    // logic for square root
    let result3 = Math.sqrt(input3.value);
    display3.innerHTML = `Square root of ${input3.value} = ${result3}`;
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
    // displaying
    output4.innerHTML = `Square of ${input4.value} = ${result4}`;
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


// 9. Area : Triangle Base & Heigth
function areaTriangleBase() {
    let input9p1 = document.getElementById("input9p1");
    let input9p2 = document.getElementById("input9p2");
    let output9 = document.getElementById("output9");

    // logic
    let result9p1 = input9p1.value * input9p2.value;
    let result9p2 = result9p1 / 2;
    output9.innerText = result9p2;
}
// reapeating area of Triangle Base & Height
function reapeatingAreaTriangleBase() {
    setInterval(() => {
        areaTriangleBase();
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
// reapeating area of Trapezium
function reapeatingAreaTrapezium() {
    setInterval(() => {
        areaTrapezium();
    }, 100);
}



// 13. Area : Triangle Side
function areaTriangleSide() {
    let input13p1 = Number(document.getElementById("input13p1").value);
    let input13p2 = Number(document.getElementById("input13p2").value);
    let input13p3 = Number(document.getElementById("input13p3").value);
    let output13 = document.getElementById("output13");

    // logic   
    var semiperimeter = (input13p1 + input13p2 + input13p3) / 2;
    var calculation = semiperimeter * (semiperimeter - input13p1) * (semiperimeter - input13p2) * (semiperimeter - input13p3);
    let result13 = Math.sqrt(calculation);
    output13.innerText = result13;
}
// reapeating area of Triangle side
function reapeatingAreaTriangleSide() {
    setInterval(() => {
        areaTriangleSide();
    }, 100);
}


// 14. Perimeter : Square
function perimeterSquare() {
    let input14 = Number(document.getElementById("input14").value);
    let output14 = document.getElementById("output14");

    // logic
    let result14 = input14 * 4;
    output14.innerText = result14;
}
// reapeating Perimeter of Square
function reapeatingPerimeterSquare() {
    setInterval(() => {
        perimeterSquare();
    }, 100);
}


// 15. Perimeter : Rectangle
function perimeterRectangle() {
    let input15p1 = Number(document.getElementById("input15p1").value);
    let input15p2 = Number(document.getElementById("input15p2").value);
    let output15 = document.getElementById("output15");

    // logic
    let result15 = (input15p1 + input15p2) * 2;
    output15.innerText = result15;
}
// reapeating Perimeter of Square
function reapeatingPerimeterRectangle() {
    setInterval(() => {
        perimeterRectangle();
    }, 100);
}


// 16. Perimeter : Triangle
function perimeterTriangle() {
    let input16p1 = Number(document.getElementById("input16p1").value);
    let input16p2 = Number(document.getElementById("input16p2").value);
    let input16p3 = Number(document.getElementById("input16p3").value);
    let output16 = document.getElementById("output16");

    // logic
    let result16 = input16p1 + input16p2 + input16p3;
    output16.innerText = result16;
}
// reapeating Perimeter of Square
function reapeatingPerimeterTriangle() {
    setInterval(() => {
        perimeterTriangle();
    }, 100);
}


// 17. Perimeter : Circle
function perimeterCircle() {
    let input17 = Number(document.getElementById("input17").value);
    let output17 = document.getElementById("output17");

    // logic
    let result17 = Math.PI * (input17 * input17);
    output17.innerText = result17;
}
// reapeating Perimeter of Circle
function reapeatingPerimeterCircle() {
    setInterval(() => {
        perimeterCircle();
    }, 100);
}


// Selecting System (ss) 
// resource for selecting system
let select = document.querySelector(".select");

// logic for selecting system
select.addEventListener("change", function() {
    // normal Calculator
    if (select.value == "standardCalculator") {
        standardCalculator();
        // pythagorean Theorem
    } else if (select.value == "pythagoreanHypotenuse") {
        repeatingPythagoreanHypotenuse();
    } else if (select.value == "pythagoreanSide") {
        repeatingPythagoreanSide();
        // Maths
    } else if (select.value == "squareroot") {
        repeatingSquareRoot();
    } else if (select.value == "square") {
        reapeatingSquare();
    } else if (select.value == "power") {
        reapeatingPower();
        // Area
    } else if (select.value == "areaSquare") {
        reapeatingAreaSquare();
    } else if (select.value == "areaRectangle") {
        reapeatingAreaRectangle();
    } else if (select.value == "areaTriangleBase") {
        reapeatingAreaTriangleBase();
    } else if (select.value == "areaTriangleSide") {
        reapeatingAreaTriangleSide();
    } else if (select.value == "areaCircle") {
        reapeatingAreaCircle();
    } else if (select.value == "areaParallelogram") {
        reapeatingAreaParallelogram();
    } else if (select.value == "areaTrapezium") {
        reapeatingAreaTrapezium();
        // perimeter
    } else if (select.value == "perimeterSquare") {
        reapeatingPerimeterSquare();
    } else if (select.value == "perimeterRectangle") {
        reapeatingPerimeterRectangle();
    } else if (select.value == "perimeterTriangle") {
        reapeatingPerimeterTriangle();
    } else if (select.value == "perimeterCircle") {
        reapeatingPerimeterCircle();
    }
})