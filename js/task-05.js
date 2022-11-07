// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".


const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');


inputRef.addEventListener("input", (event) => {
    if (event.target.value === "") {
        outputRef.textContent = "Anonymous";
        return;
    }
    outputRef.textContent = event.target.value;
});

