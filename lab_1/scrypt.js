// Додаємо можливість вибору елементів меню
const menuItems = document.querySelectorAll('.menu-item');

// Додаємо подію на кожен елемент меню
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // Якщо елемент вже вибраний, скидаємо вибір
        if (this.classList.contains('selected')) {
            this.classList.remove('selected');
        } else {
            this.classList.add('selected');
        }
    });
});

// Обробляємо замовлення
document.getElementById('order-btn').addEventListener('click', function() {
    let selectedItems = [];

    // Перевіряємо, які елементи меню вибрані
    menuItems.forEach(item => {
        if (item.classList.contains('selected')) {
            selectedItems.push(item.textContent);
        }
    });

    // Виводимо повідомлення про замовлення
    if (selectedItems.length > 0) {
        document.getElementById('order-message').textContent = 'Ви замовили:\n' + selectedItems.join(', ');
    } else {
        document.getElementById('order-message').textContent = 'Виберіть хоча б один елемент меню.';
    }
});

// Додатковий Event Listener для зміни кольору заголовку при наведенні
const pageTitle = document.getElementById('page-title');
pageTitle.addEventListener('mouseover', function() {
    this.style.color = '#d63031';
});
pageTitle.addEventListener('mouseout', function() {
    this.style.color = '#ffffff';
});
