import dropdownView from '../dropdown/dropdownView'

export default class View {
    // Создаем экземпляр dropdownView, который будет использоваться для управления выпадающими списками в интерфейсе.
    dropdown = new dropdownView()

    // Объект filter содержит ссылки на DOM-элементы, связанные с фильтром:
    // - parent: родительский элемент, который содержит все элементы фильтра.
    // - options: элементы, представляющие опции фильтра.
    // - resets: элементы для сброса фильтра.
    filter = {
        parent: document.getElementById('filter') || undefined, // Пытаемся найти элемент с id 'filter'. Если не найден, присваиваем undefined.
        options: null, // Изначально нет ссылок на элементы опций фильтра.
        resets: null, // Изначально нет ссылок на элементы сброса фильтра.
    }

    coaches = {
        parent: document.getElementById('coaches-list') || undefined
    }

    // Метод init выполняет начальную настройку и проверку элементов фильтра.
    init() {
        // Проверяем, определен ли родительский элемент. Если нет, возвращаем false.
        if (this.filter.parent === undefined) return false

        // Находим и сохраняем ссылки на все опции фильтра в свойстве this.filter.options.
        this.filter.options = this.filter.parent.querySelectorAll('[data-option-value]')
        // Находим и сохраняем ссылки на все элементы для сброса фильтра в свойстве this.filter.resets.
        this.filter.resets = this.filter.parent.querySelectorAll('[data-delete]')

        // Если до этого момента не было ошибок, возвращаем true.
        return true
    }

    // Метод enableFilter активирует фильтр с переданными параметрами.
    enableFilter(params) {
        // Проходимся по каждому параметру фильтра.
        Object.entries(params).forEach(param => {
            // Для каждого параметра инициализируем соответствующий выпадающий список.
            this.dropdown.init()
            // Устанавливаем значение выпадающего списка в соответствии с переданным параметром.
            // Передаем массив, где первый элемент - имя параметра, а второй - его значение.
            this.dropdown.setOptionByValue([`${param[0]}`, `${param[1]}`])
        })
    }
}
