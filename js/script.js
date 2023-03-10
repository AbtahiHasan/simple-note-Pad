const noteData = document.getElementById("note-data"),
    textarea = document.getElementById("text-area"),
    deleteBtn = document.getElementById("delete-btn");


textarea.onkeyup = () => {
    localStorage.setItem("note", textarea.value);
}

const manageValue = () => {
    let textValue = localStorage.getItem("note");
    if(textValue) {
        textarea.value = textValue;
    } else {
        textarea.value = textValue;
    }
}
deleteBtn.onclick = () => {
    window.localStorage.removeItem("note");
    manageValue();
}

window.onload = () => {
    manageValue();
}

