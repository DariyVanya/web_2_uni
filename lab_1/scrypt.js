// Додаємо можливість вибору елементів меню
const menuItems = document.querySelectorAll('.menu-item');


function handleMenuItemClick(event) {
    const item = event.currentTarget;
    // Якщо елемент вже вибраний, скидаємо вибір
    if (item.classList.contains('selected')) {
        item.classList.remove('selected');
    } else {
        item.classList.add('selected');
    }
}

// Додаємо подію на кожен елемент меню
menuItems.forEach(item => {
    item.onclick =  handleMenuItemClick;
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
        document.getElementById('order-message').textContent = 'Ви замовили:\n' + selectedItems.join(', ') + '\n';
        document.getElementsByClassName('message')[0].classList.add("message-border");
    } else {
        document.getElementById('order-message').textContent = 'Виберіть хоча б один елемент меню.';
        document.getElementsByClassName('message')[0].classList.add("message-border");
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
