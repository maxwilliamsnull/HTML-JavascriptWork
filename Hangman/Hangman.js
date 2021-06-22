var image_number = 0
var secret_word = ""
var display_word = ""

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
    display_word = ""
    var box = document.getElementById("secret")
    secret_word = box.value
    console.log(secret_word)
    for(i = 0; i < secret_word.length; i++){
        display_word += '?'
    }
}

function make_guess(letter){
    letterInWord = false
    for(i = 0; i < secret_word.length; i++){
        if(secret_word.charAt(i) == letter){
            display_word = display_word.substring(0, i) + 
            letter + display_word.substring(i + 1, display_word.length)
            letterInWord = true
        }
    }
    if(!letterInWord){
        changePhoto()
    }
}

function resetGame(){
    setPhoto(0)
    showBox("Box")
}