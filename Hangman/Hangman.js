var image_number = 0
var secret_word = ""

function hide(id){
    sel = document.getElementById(id)
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

function hideBox(id){
    var disp = document.getElementById(id)
    disp.hidden=true
    disp.isContentEditable = false
}

function showBox(id){
    var disp = document.getElementById(id)
    disp.hidden = false
    disp.isContentEditable = true
}

function setPhoto(number){
    var images = document.getElementById("gallows")
    if(number < 0){
        images.hidden=true
    } else {
        images.src = "Images\\" + String(number) + ".jpg"
    }
}

function changePhoto(){
    image_number = (image_number + 1) % 11
    setPhoto(image_number)
}

function setWord(){
    var box = document.getElementById("secret")
    secret_word = box.value
    console.log(secret_word)
}

function resetGame(){
    setPhoto(-1)
    showBox("Box")
}