
let boldButton = document.getElementById("boldB");
let superButton = document.getElementById("superB");
let subButton = document.getElementById("subB");
let fontColorInput = document.getElementById("fontColor");
let highlightColorInput = document.getElementById("highlightColor");

boldButton.addEventListener("click", () => boldFunction())
superButton.addEventListener("click", () => superscriptFunction())
subButton.addEventListener("click", () => subscriptFunction())
fontColorInput.addEventListener("click", () => fontColorFunction())
highlightColorInput.addEventListener("click", () => highlightColorFunction())


// Bring in the selection of different fonts available
let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
];




const boldFunction = () => {
    modifyText("bold",true,null);
}
const superscriptFunction = () => {
    modifyText("superscript",true,null);
}
const subscriptFunction = () => {
    modifyText("subscript",true,null);
}

const fontColorFunction = () => {
    modifyText("foreColor",true,fontColorInput.value);
}
const highlightColorFunction = () => {
    modifyText("backColor",true,highlightColorInput.value);
}

const modifyText = (command, defaultUI, inputString) => {
    document.execCommand(command, defaultUI, inputString);
}


