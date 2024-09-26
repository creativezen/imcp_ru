import { throttle } from '../../utilities/throttle' // Импорт функции throttle для оптимизации обработки прокрутки
import menuView from './menuView' // Импорт класса View
import menuModel from './menuModel' // Импорт класса Model

/* Управление мобильным меню */
export function mobile() {
	const view = new menuView // Создание экземпляра View
    const model = new menuModel // Создание экземпляра Model

	view.init() // Инициализация представления

    if (view.init() === false) {
        console.log('не найден id=header, или id=hero, или id=mobile-navigation, проверь правильность разметки...')
        console.log('либо отключи выполнение логики js/modules/menu в версии проекта разработки, если она не используется...')
        return
    }
	
	view.menu.burger.addEventListener('click', function (e) {
        // Переключение состояния мобильного меню при клике на бургер-иконку
        model.open ? closeMenu() : openMenu()
    })

    // Добавление обработчиков событий на все ссылки в мобильном меню,
    // чтобы при их клике меню автоматически закрывалось, если оно открыто
    view.menu.mobile?.querySelectorAll('a').forEach(link => 
        link.addEventListener('click', function(e) {
            if (model.open) closeMenu()
        })
    )

    // Функция для открытия мобильного меню
    function openMenu() {
        view.open() // Вызов метода открытия меню из представления
        model.open = true // Обновление состояния модели
    }
    
    // Функция для закрытия мобильного меню
    function closeMenu() {
        view.close() // Вызов метода закрытия меню из представления
        model.open = false // Обновление состояния модели
    }
}

/* Управление состоянием навигации при скролле */
export function scroll() {
    const view = new menuView // Создание экземпляра View
    const model = new menuModel // Создание экземпляра Model

    view.init() // Инициализация представления

    // Получение и сохранение высот заголовка и героического блока для дальнейшего использования
    model.headerHeight = view.header.offsetHeight
    model.heroHeight = view.hero.offsetHeight

    // Установка начальной позиции навигации в модели
    model.setNavPosition()

    // Добавление обработчика события прокрутки страницы с использованием throttle для оптимизации производительности
    window.addEventListener('scroll', throttle(() => {
        scrollStandard()
    }, 150)) // Второй параметр функции throttle - это задержка в мс

    // Функция для изменения состояния шапки при скролле страницы
    function scrollStandard() {
        // При скролле страницы на 2px или более добавляется класс 'active' к шапке,
        // делая ее более заметной или изменяя ее стиль
        if (document.documentElement.scrollTop >= 2) {
            view.header.classList.add('active')
        } else {
            view.header.classList.remove('active')
        }
    }

    // Альтернативная функция, которая может быть использована для изменения состояния шапки
    // при скролле за определенную точку, определенную в модели как navPosition
    function scrollOffsetHeader() {
        if (document.documentElement.scrollTop >= model.navPosition) {
            view.header.classList.add('active')
        } else {
            view.header.classList.remove('active')
        }
    }
}
