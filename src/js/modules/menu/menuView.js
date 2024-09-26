// Определение класса View для управления визуальной частью веб-приложения,
// в частности, для управления мобильным меню и шапкой сайта.
export default class menuView {
    
    // Инициализация свойств класса для хранения ссылок на ключевые DOM-элементы.
    // Эти элементы будут использоваться для управления состоянием мобильного меню и шапки сайта.
    header = document.getElementById('header')
    hero = document.getElementById('hero')
    up = null

    // Объект menu для группировки свойств, связанных с элементами мобильного меню.
    // Включает в себя ссылки на кнопку бургер-меню, само мобильное меню, его иконку и другие составляющие.
    menu = {
        mobile: document.getElementById('mobile-navigation'),
        main: null,
        burger: null,
        icon: null,
        list: null,
        links: null,
        close: null,
    }

    // Метод init() служит для инициализации класса, находя и сохраняя ссылки на необходимые DOM-элементы.
    init() {
        if (this.header === undefined || this.hero === undefined || this.menu.mobile === undefined) return false
        // Поиск и сохранение ссылок на основные элементы страницы по их ID.
        this.up = document.getElementById('up')
        this.hero = document.getElementById('hero')

        // Поиск и сохранение ссылок на элементы мобильного меню по их ID.
        this.menu.main = document.getElementById('main-navigation')
        this.menu.burger = document.getElementById('menu-burger')
        this.menu.icon = document.getElementById('menu-icon')
        this.menu.list = document.getElementById('mobile-navigation-list')

        return true
    }

    // Метод open() отвечает за открытие мобильного меню.
    // Это достигается добавлением класса 'active' к элементам мобильного меню и изменением вида шапки.
    open() {
        // Добавление класса 'active' к элементам мобильного меню для его отображения.
        this.menu.mobile.classList.add('active')
        this.menu.burger.classList.add('active')
        this.menu.icon.classList.add('active')

        // Добавление класса 'transparent' к шапке сайта для изменения её вида, например, сделать фон прозрачным.
        this.header.classList.add('transparent')
    }
    
    // Метод close() отвечает за закрытие мобильного меню,
    // удаляя класс 'active' с элементов мобильного меню и возвращая шапку к исходному виду.
    close() {
        // Удаление класса 'active' с элементов мобильного меню для его скрытия.
        this.menu.mobile.classList.remove('active')
        this.menu.burger.classList.remove('active')
        this.menu.icon.classList.remove('active')

        // Удаление класса 'transparent' с шапки сайта, возвращая её к стандартному виду.
        this.header.classList.remove('transparent')
    }
}
