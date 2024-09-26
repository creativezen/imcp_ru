// Импортируем классы View и Model для работы с интерфейсом и данными соответственно
import dropdownView from "./dropdownView"
import dropdownModel from './dropdownModel'

// Экспортируем функцию standart, которая служит контроллером в паттерне MVC
export function standart() {
    // Создаем экземпляры классов View и Model
    let view = new dropdownView()
    let model = new dropdownModel()

    // Инициализация View. Если элементы .js-dropdown отсутствуют в DOM, выводим сообщение в консоль и прекращаем выполнение функции
    if (view.init() === false) {
        console.log('элемент .js-dropdown не найден, проверь правильность разметки...')
        console.log('либо отключи данный скрипт, если он не используется...')
        return
    }
    
    // Добавляем обработчики событий клика для всех элементов выпадающего списка
    view.dropdown.collection.forEach(dropdown => {
        dropdown.addEventListener('click', clickDropdown)
    })

    // Функция обработки клика по выпадающему списку
    function clickDropdown(e) {
        // Определяем ближайший элемент выпадающего списка относительно элемента, по которому был совершен клик
        const dropdown = e.target.closest('.js-dropdown')
        // Устанавливаем текущий экземпляр выпадающего списка в представлении
        view.dropdown.instance = dropdown

        // Переключаем состояние активности выпадающего списка между открытым и закрытым
        if (!model.dropdown.active) {
            model.dropdown.active = view.openDropdown()
        }
        else if (model.dropdown.active) {
            model.dropdown.active = view.closeDropdown()
        }
    }

    // Для каждой опции выпадающего списка добавляем обработчик событий клика, который изменяет текущее значение
    view.dropdown.options.forEach(option => {
        option.addEventListener('click', (e) => {
            model.dropdown.current_value = view.changeValue(e)
        })
    })

    // Для каждого элемента удаления добавляем обработчик событий клика, который сбрасывает текущее значение выпадающего списка
    view.dropdown.deletes.forEach(del => {
        del.addEventListener('click', (e) => {
            e.stopPropagation() // Предотвращаем всплытие события, чтобы клик не активировал clickDropdown
            let currentValue = view.resetValue(e) // Сброс значения
            currentValue.dataset.selectValue = 'default' // Устанавливаем значение data-атрибута на 'default'
            currentValue.textContent = model.dropdown.default_value // Обновляем текстовое содержание элемента значением по умолчанию из модели
        })
    })

    // Добавление метода для закрытия dropdown при клике вне его
    document.addEventListener('click', function(e) {
        const clickOnDropdown = e.composedPath().includes(view.dropdown.instance)

        if (!clickOnDropdown && model.dropdown.active) {
            model.dropdown.active = view.closeDropdown()
        }
    })
}
