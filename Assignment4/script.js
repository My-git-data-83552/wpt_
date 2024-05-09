function DoAddition() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    document.getElementById("result").value = parseFloat(num1) + parseFloat(num2);
    
}

function DoSubstraction() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    document.getElementById("result").value = parseFloat(num1) - parseFloat(num2);
    
}

function DoMultiplication() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    document.getElementById("result").value = parseFloat(num1) * parseFloat(num2);
}

function DoDivision() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    document.getElementById("result").value = parseFloat(num1) / parseFloat(num2);
}
