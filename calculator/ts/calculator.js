function calculate() {
    var input1Elements = document.getElementById("input1").nodeValue;
    var input2Elements = document.getElementById("input2").nodeValue;
    var operaterElement = document.getElementById("operator").nodeValue;
    if (input1Elements == null || input2Elements == null || operaterElement == null) {
        alert("invalid Operation!!");
    }
    else {
        var input1 = parseInt(input1Elements);
        var input2 = parseInt(input2Elements);
        var operater = operaterElement;
        var output = 0;
        if (operater == "Add") {
            output = input1 + input2;
            document.getElementById("output").innerHTML = "" + output;
        }
        if (operater == "Subtract") {
            output = input1 - input2;
            document.getElementById("output").innerHTML = "" + output;
        }
        if (operater == "Multiply") {
            output = input1 * input2;
            document.getElementById("output").innerHTML = "" + output;
        }
        if (operater == "Divide") {
            if (input2 == 0) {
                alert("Cannot divide by zero");
            }
            else {
                output = input1 / input2;
                document.getElementById("output").innerHTML = "" + output;
            }
        }
        if (operater == "Modulus") {
            output = input1 % input2;
            document.getElementById("output").innerHTML = "" + output;
        }
    }
}
function setOperater(operater) {
    if (operater == "Add") {
        document.getElementById("operator").setAttribute("value", operater);
    }
    if (operater == "Subtract") {
        document.getElementById("operator").setAttribute("value", operater);
    }
    if (operater == "Multiply") {
        document.getElementById("operator").setAttribute("value", operater);
    }
    if (operater == "Divide") {
        document.getElementById("operator").setAttribute("value", operater);
    }
    if (operater == "Modulus") {
        document.getElementById("operator").setAttribute("value", operater);
    }
}
