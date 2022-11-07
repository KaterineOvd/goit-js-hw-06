
    // Створи; змінну; counterValue, в; якій; буде; зберігатися; поточне; значення; лічильника; та; ініціалізуй; її; значенням; 0.
    // Додай; слухачів; кліків; до; кнопок, всередині; яких; збільшуй; або; зменшуй; значення; лічильника.
        
    // Оновлюй; інтерфейс; новим; значенням; змінної; counterValue.
        

let counterValue = 0;
const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

decBtn.addEventListener("click", () => {
    valueRef.textContent = counterValue -= 1;
})

incBtn.addEventListener("click", () => {
    valueRef.textContent = counterValue += 1;
})
