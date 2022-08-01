window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menu_item = document.querySelectorAll('.menu_item'),
    humburger = document.querySelector('.humburger');

    humburger.addEventListener('click', () => {
        humburger.classList.toggle('humburger_active');
        menu.classList.toggle('menu_active');
    });

    menu_item.forEach(item => {
        item.addEventListener('click', () => {
            humburger.classList.toggle('humburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})