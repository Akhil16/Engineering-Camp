
function calculate(): void {
    let input1Elements: string = (<HTMLInputElement>document.getElementById("input1")).value
    let input2Elements: string = document.getElementById("input2").nodeValue
    let operaterElement: String = document.getElementById("operator").nodeValue
    if (input1Elements == null || input2Elements == null || operaterElement == null) {
        alert("invalid Operation!!")
    }
    else {
        let input1 :number = parseInt(input1Elements)
        let input2 :number = parseInt(input2Elements)
        let operater = operaterElement
        let output :number=0
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
                alert("Cannot divide by zero")
            } else {
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
    function setOperater(operater: string): void {
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