// Отримуємо елементи за допомогою різних методів
const orderBtn = document.getElementById('order-btn');
const description = document.querySelector('#description');
const menuItems = document.getElementsByClassName('menu-item');
const menu = document.getElementsByClassName('menu')

// Змінна для зберігання активного елементу
let activeItem = null;

// Додаємо обробник подій для кнопки
orderBtn.addEventListener('click', () => {
    alert('Дякуємо за ваше замовлення!');
    description.textContent = 'Ваше замовлення прийнято!';
    orderBtn.disabled = true;
    activeItem.classList.remove('highlight');
    activeItem = null;
    menu.classList.add('invisible');
    
});

// Додаємо обробник подій для кожного елементу меню
for (let item of menuItems) {
    item.addEventListener('mouseover', (event) => {
        if (event.target !== activeItem) {
            event.target.classList.add('highlight');
        }
    });

    item.addEventListener('mouseout', (event) => {
        if (event.target !== activeItem) {
            event.target.classList.remove('highlight');
        }
    });

    // Додаємо обробник події на клік для закріплення підсвітки
    item.addEventListener('click', (event) => {
        // Знімаємо підсвітку з попереднього активного пункту
        if (activeItem) {
            activeItem.classList.remove('highlight');
        }

        // Закріплюємо підсвітку на новому активному пункті
        activeItem = event.target;
        activeItem.classList.add('highlight');
    });
}

// Додаємо обробник події для клавіші Enter
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        alert('Ви натиснули клавішу Enter');
    }
});
