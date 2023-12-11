let btn = document.querySelector("#btn1")
let input = document.querySelector("#name-input")
let greeting = document.querySelector("#greeting");
btn.addEventListener("click", function () {
    let enteredName = input.value
    
    input.value = ""
    if (enteredName.length > 0) {
        greeting.textContent = `Hi ${enteredName}!`
    } else {
        greeting.textContent = "Hi there."
    }
})