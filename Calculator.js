const operations = "opers"
const boxOne = "b1"
const boxTwo = "b2"

function calc(){
    sel = document.getElementById(operations)
    op = sel.options[sel.selectedIndex].innerHTML
    numberOne = document.getElementById(boxOne).value
    numberTwo = document.getElementById(boxTwo).value
    equation = numberOne + " " + op + " " + numberTwo
    answer = "Answer: " + eval(equation)
    if(op == '/' && numberTwo == 0){
        answer = "Cannot divide by 0"
    }
    document.getElementById("ans").innerHTML = answer

    var disp = document.getElementById("ans")
    if(disp.hidden){
         disp.hidden=false
    }
}

function hideAnswer(){
    var disp = document.getElementById("ans")
    disp.hidden=true
    disp.innerHTML = ""
    console.log(disp.value)
}