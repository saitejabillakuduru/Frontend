const display = document.getElementById("display");
console.log(display);
display.innerText = 0;

document.querySelectorAll("#number").forEach(button => {
    button.addEventListener("click", () => {
        checkdisplay(button.innerText);
    })
})

document.querySelectorAll("#operator").forEach(button=>{
    button.addEventListener("onclick",()=>{
        checkdisplay(button.innerHTML);
    })
})
document.addEventListener("keydown", (event) => {

    console.log(event.key);

    if ("1234567890+-*/%.".includes(event.key)) {
        checkdisplay(event.key);
    }

    if (event.key === "Enter") {
        display.innerText = eval(display.innerText);
    }

    if (event.key === "Escape") {
        display.innerText = 0;
    }

    if (event.key === "Backspace") {
        removedisplay();
    }

});

document.getElementById("zero").addEventListener("click", () => {
    checkdisplay("0");
})

document.getElementById("clear").addEventListener("click", () => {
    display.innerText = 0
})

document.getElementById("equals").addEventListener("click", () => {
    display.innerText = eval(display.innerText);
})

document.getElementById("dot").addEventListener("click", () => {
    display.innerText += "."
})

document.getElementById("backspace").addEventListener("click", () => {
    removedisplay()
})

function checkdisplay(number) {

    const operator=['+','-','*','/']
    let includes=display.innerText.split(operator.find(op=>display.innerText.includes(op)));
     let char=includes[includes.length-1]
    if (display.innerText == "0") {
        display.innerText = ""
    }

    if (char.length < 11) {
        return display.innerText += number;
    }
}

function removedisplay() {
    display.innerText = display.innerText.slice(0, -1);

    if (display.innerText.length == 0) {
        display.innerText = 0
    }
}