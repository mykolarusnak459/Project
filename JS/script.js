

const buttonIdElement = document.querySelector(`.button_id`);
const buttonElements = buttonIdElement.querySelectorAll(`.button_user`);

// Перебираем все элементы списка и присваиваем нужное значение
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
    // Разрешаем сбрасывать элементы в эту область
    evt.preventDefault();

    // Находим перемещаемый элемент
    const activeElement = buttonIdElement.querySelector(`.selected`);
    // Находим элемент, над которым в данный момент находится курсор
    const currentElement = evt.target;
    // Проверяем, что событие сработало:
    // 1. не на том элементе, который мы перемещаем,
    // 2. именно на элементе списка
    const isMoveable = activeElement !== currentElement &&
        currentElement.classList.contains(`button_user`);

    // Если нет, прерываем выполнение функции
    if (!isMoveable) {
        return;
    }

    // Находим элемент, перед которым будем вставлять
    const nextElement = (currentElement === activeElement.nextElementSibling) ?
        currentElement.nextElementSibling :
        currentElement;

    // Вставляем activeElement перед nextElement
    buttonIdElement.insertBefore(activeElement, nextElement);
});

const getNextElement = (cursorPosition, currentElement) => {
    // Получаем объект с размерами и координатами
    const currentElementCoord = currentElement.getBoundingClientRect();
    // Находим вертикальную координату центра текущего элемента
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

    // Если курсор выше центра элемента, возвращаем текущий элемент
    // В ином случае — следующий DOM-элемент
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

    // evt.clientY — вертикальная координата курсора в момент,
    // когда сработало событие
    const nextElement = getNextElement(evt.clientY, currentElement);

    // Проверяем, нужно ли менять элементы местами
    if (
        nextElement &&
        activeElement === nextElement.previousElementSibling ||
        activeElement === nextElement
    ) {
        // Если нет, выходим из функции, чтобы избежать лишних изменений в DOM
        return;
    }

    buttonIdElement.insertBefore(activeElement, nextElement);
});

// const url = 'https://jsonplaceholder.typicode.com/users/3';
// fetch(url)
//     .then(data => console.log(data));



const url = 'https://jsonplaceholder.typicode.com/users/1';
axios.get(url)
    .then(response => console.log(response));

// fetch(url)
//     .catch(error => console.log('BAD', error))
//     .then(response => (this.user_1 = response));

new Vue({
    el: '#name1',
    data() {
        return {
            name: "name:"
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
});
