// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];



const listRef = document.querySelector('#ingredients');

const items = ingredients.map(el => {
  const createLi = document.createElement('li')
  createLi.innerText = el;
  createLi.classList.add('item');

  return createLi
})

listRef.append(...items)

