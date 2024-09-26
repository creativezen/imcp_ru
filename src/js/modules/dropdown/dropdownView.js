// Определение класса View
export default class dropdownView {
    // Инициализация свойства dropdown с начальными значениями
    dropdown = {
        collection: document.querySelectorAll('.js-dropdown') || undefined, // Собираем все элементы с классом .js-dropdown
        instance: null, // Текущий экземпляр выпадающего списка, с которым в данный момент ведется работа
        value: null, // Текущее значение выбранного элемента в выпадающем списке
        options: null, // Опции (выборы) внутри выпадающего списка
        deletes: null // Элементы для удаления выбранного значения выпадающего списка
    }

    // Метод для инициализации выпадающего списка
    init() {
        // Проверка на наличие элементов выпадающего списка в DOM
        if (this.dropdown.collection === undefined) return false

        // Находим и сохраняем опции и кнопки удаления для всех выпадающих списков
        this.dropdown.options = document.querySelectorAll('.js-dropdown [data-option-value]')
        this.dropdown.deletes = document.querySelectorAll('.js-dropdown [data-delete]')

        return true
    }

    // Метод для открытия выпадающего списка
    openDropdown() {
        this.dropdown.instance.classList.add('active') // Добавление класса active для отображения списка
        this.dropdown.value = this.dropdown.instance.querySelector('[data-select-value]') // Сохранение ссылки на элемент, отображающий выбранное значение
        
        return true
    }
    
    // Метод для закрытия выпадающего списка
    closeDropdown() {
        this.dropdown.instance.classList.remove('active') // Удаление класса active для скрытия списка
        this.dropdown.value = null // Сброс текущего значения выбранного элемента
        this.dropdown.options = null // Сброс списка опций
        
        return false
    }
    
    // Метод для изменения значения в выпадающем списке
    changeValue(e) {
        let value = e.target.closest('[data-option-value]').dataset.optionValue // Получение значения выбранной опции
        let text = e.target.closest('[data-option-value]').textContent // Получение текста выбранной опции
        
        // Обновление данных и текста элемента для удаления выбранного значения
        this.dropdown.instance.querySelector('[data-delete]').dataset.delete = text
        // Обновление отображаемого значения и его данных в выпадающем списке
        this.dropdown.value.textContent = text
        this.dropdown.value.dataset.selectValue  = value
        
        return value // Возвращение нового значения
    }
    
    // Метод для сброса значения в выпадающем списке
    resetValue(e) {
        let delElement = e.target.closest('.js-dropdown').querySelector('[data-delete]') // Находим элемент для удаления значения
        let valueElement = e.target.closest('.js-dropdown').querySelector('[data-select-value]') // Находим элемент, отображающий выбранное значение

        delElement.dataset.delete = 'hidden' // Скрываем элемент для удаления

        return valueElement // Возвращаем элемент, отображающий выбранное значение
    }

    // Метод setOptionByValue предназначен для программного выбора опции выпадающего списка.
    // Параметры:
    // paramName - строковый идентификатор, используемый для поиска конкретного экземпляра выпадающего списка в DOM.
    // paramValue - значение опции, которую требуется выбрать.
    setOptionByValue(params) {

        let paramName = params[0]
        let paramValue = params[1]

        // Если находится соответствующая опция, обновляем ссылку на текущий экземпляр выпадающего списка,
        // используя data-атрибут filter с переданным параметром для поиска в DOM.
        this.dropdown.instance = document.querySelector(`[data-filter=${paramName}]`)

        // Перебор всех доступных опций в выпадающем списке.
        this.dropdown.options.forEach(option => {

            // Проверка на совпадение значения data-атрибута optionValue текущей опции с переданным значением value.
            if (option.dataset.optionValue == paramValue) {

                // Сохранение ссылки на DOM-элемент, отображающий текущее выбранное значение выпадающего списка,
                // используя data-атрибут select-value для его идентификации.
                this.dropdown.value = this.dropdown.instance.querySelector('[data-select-value]')

                // Извлечение значения и текста найденной опции.
                let value = option.dataset.optionValue // Значение опции, используемое в логике или для отправки на сервер.
                let text = option.textContent // Текст опции, отображаемый пользователю.

                // Обновление data-атрибута и текста элемента, предназначенного для удаления выбранного значения,
                // чтобы пользователь мог отменить свой выбор.
                this.dropdown.instance.querySelector('[data-delete]').dataset.delete = text

                // Обновление текстового содержания и data-атрибута selectValue элемента,
                // отображающего выбранное значение, для соответствия выбранной опции.
                this.dropdown.value.textContent = text // Обновление видимого текста.
                this.dropdown.value.dataset.selectValue = value // Обновление значения data-атрибута.

                // Возврат значения выбранной опции, что может быть полезно для последующих действий или проверок.
                return paramValue
            }
        })
    }
}
