
const buttonIdElement = document.querySelector(`.button_id`);
const buttonElements = buttonIdElement.querySelectorAll(`.button_user`);

// перебираємо всі елементи списка
for (const task of buttonElements) {
    task.draggable = true;
}

buttonIdElement.addEventListener(`dragstart`, (evt) => {
    evt.target.classList.add(`selected`);
})

buttonIdElement.addEventListener(`dragend`, (evt) => {
    evt.target.classList.remove(`selected`);
});

buttonIdElement.addEventListener(`dragover`, (evt) => {
    // дозволяємо скидувати елементи в область
    evt.preventDefault();

    // находимо об'єкт який переміщуємо
    const activeElement = buttonIdElement.querySelector(`.selected`);
    // находимо елемент над яким знаходимось
    const currentElement = evt.target;
    // Перевіряємо

    const isMoveable = activeElement !== currentElement &&
        currentElement.classList.contains(`button_user`);

    if (!isMoveable) {
        return;
    }

    // елемент перед яким будемо вставляти
    const nextElement = (currentElement === activeElement.nextElementSibling) ?
        currentElement.nextElementSibling :
        currentElement;

    // Вставляємо activeElement перед nextElement
    buttonIdElement.insertBefore(activeElement, nextElement);
});

const getNextElement = (cursorPosition, currentElement) => {
    // Получаємо об'єкт з координатами
    const currentElementCoord = currentElement.getBoundingClientRect();
    // вертикальна коорд
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

    // якщо курсор вище ел повертаємо ел який перем
    // в інш випадку наступний DOM-ел
    const nextElement = (cursorPosition < currentElementCenter) ?
        currentElement :
        currentElement.nextElementSibling;

    return nextElement;
};

buttonIdElement.addEventListener(`dragover`, (evt) => {
    evt.preventDefault();

    const activeElement = buttonIdElement.querySelector(`.selected`);
    const currentElement = evt.target;
    const isMoveable = activeElement !== currentElement &&
        currentElement.classList.contains(`button_user`);

    if (!isMoveable) {
        return;
    }

    // evt.clientY — верт коорд курс

    const nextElement = getNextElement(evt.clientY, currentElement);

    // провір чи треба міняти місцями
    if (
        nextElement &&
        activeElement === nextElement.previousElementSibling ||
        activeElement === nextElement
    ) {
        return;
    }

    buttonIdElement.insertBefore(activeElement, nextElement);
});

// const url = 'https://jsonplaceholder.typicode.com/users/3';
// fetch(url)
//     .then(data => console.log(data));

// const url = 'https://jsonplaceholder.typicode.com/users/3';
// axios.get(url)
//     .then(response => console.log(response));
// // fetch(url) 
// //     .catch(error => console.log('BAD', error)) 
// //     .then(response => (this.user_1 = response)); 
// використання axios для доступу до API
//
new Vue({
    el: '#name1',
    data() {
        return {
            name: "name:",
        };
    },
    mounted() {
        axios
            .get('https://jsonplaceholder.typicode.com/users/1')
            .then(response => (this.name = response.data.name));
    }
});
new Vue({
    el: '#name2',
    data() {
        return {
            name: "name:"
        };
    },
    mounted() {
        axios
            .get('https://jsonplaceholder.typicode.com/users/2')
            .then(response => (this.name = response.data.name));
    }
});
new Vue({
    el: '#name3',
    data() {
        return {
            name: "name:"
        };
    },
    mounted() {
        axios
            .get('https://jsonplaceholder.typicode.com/users/3')
            .then(response => (this.name = response.data.name));
    }
});
new Vue({
    el: '#name4',
    data() {
        return {
            name: "name:"
        };
    },
    mounted() {
        axios
            .get('https://jsonplaceholder.typicode.com/users/4')
            .then(response => (this.name = response.data.name));
    }
});
new Vue({
    el: '#name5',
    data() {
        return {
            name: "name:"
        };
    },
    mounted() {
        axios
            .get('https://jsonplaceholder.typicode.com/users/5')
            .then(response => (this.name = response.data.name));
    }
}
);


