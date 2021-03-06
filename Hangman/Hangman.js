const MINIMUM_LENGTH = 4
var image_number = 4
var secret_word = ""
var display_word = ""


function getWord(){
    var box = document.getElementById("secret")
    return box.value.toUpperCase()
}
function wordIsValid(){
    var word = getWord()
    return word.length >= MINIMUM_LENGTH
}

function startGame(){
    if(wordIsValid()){
        hideBox("Box")
        setWord()
        setPhoto(4)
        generateButtons()
        updateDisplay()
    } else {
        window.alert("INVALID WORD: Must be at least " + String(MINIMUM_LENGTH) + " letters long")
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
    secret_word = getWord()
    for(i = 0; i < secret_word.length; i++){
        display_word += '?'
    }
}

function checkForWinOrLoss(){
    if(secret_word==display_word){
        window.alert("YOU WIN")
        disableButtons()
        console.log("WIN")
    } else if(image_number == 10){
        window.alert("YOU LOSE")
        disableButtons()
        console.log("LOSS")
        revealWord()
    }
}

function revealWord(){
    display_word = secret_word
    updateDisplay()
}

function make_guess(button){
    button.disabled = true
    letterInWord = false
    letter = button.innerHTML
    for(var i = 0; i < secret_word.length; i++){
        character = secret_word.charAt(i)
        if(character == letter){
            display_word = display_word.substring(0, i) + 
            letter + display_word.substring(i + 1, display_word.length)
            letterInWord = true
        }
    }
    if(!letterInWord){
        changePhoto()
        console.log("change")
    }
    updateDisplay()
    console.log(image_number)
    checkForWinOrLoss()
}

function updateDisplay(){
    area = document.getElementById("display")
    area.isContentEditable = true
    area.innerHTML = display_word
    area.isContentEditable = false
}

function resetGame(){
    setPhoto(4)
    image_number = 4
    showBox("Box")
    clearButtons()
    var box = document.getElementById("secret")
    box.value = ""
    console.log(box.value)
    console.log(box.innerHTML)
    setWord()
    updateDisplay()
}

function clearButtons(){
    letters = document.getElementById("letters")
    while(letters.firstChild){
        letters.removeChild(letters.firstChild)
    }
}

function disableButtons(){
    var buttons = document.querySelectorAll("button")
    for(var i = 0; i < buttons.length - 1; i++){
        btn = buttons[i]
        btn.disabled = true
    }
}

function generateButtons(){
    var start_value = "A".charCodeAt()
    var end_value = "Z".charCodeAt()
    var group = document.getElementById("letters")
    group.innerHTML = ''

    number = 0
    for(i = start_value; i <= end_value; i++){
        letter = String.fromCharCode(i)
        btn = document.createElement("button")
        btn.innerHTML = letter
        btn.type = "button"
        btn.class = "inputButtons"
        function assignFunction(button){
            return function(){
                make_guess(button)    
            }
        }
        btn.onclick = assignFunction(btn)
        btn.id = "Button"
        group.append(btn)
        number++
    }
}