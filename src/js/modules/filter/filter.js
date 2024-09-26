import filterView from './filterView'
import filterModel from './filterModel'

export function coach() {
    // Создаем экземпляр filterView для управления элементами пользовательского интерфейса.
    const view = new filterView()
    // Создаем экземпляр filterModel для управления данными и состоянием фильтра.
    const model = new filterModel()

    // Инициализация представления. Проверяем, успешно ли прошла инициализация.
    // Если элемент с id=filter не найден, выводим сообщения об ошибке и прекращаем выполнение функции.
    if (view.init() === false) {
        console.log('элемент id=filter не найден, проверь правильность разметки...')
        console.log('либо отключи данный скрипт, если он не используется...')
        return
    }

    // Проверяем, есть ли в URL параметры фильтра. Если да, применяем эти параметры к фильтру.
    // if (model.getUrlParams()) {
    //     view.enableFilter(model.params)
    // }

    // Добавляем обработчики событий клика к каждому элементу фильтра, позволяя пользователю выбирать опции фильтра.
    view.filter.options.forEach(option => option.addEventListener('click', setFilter))

    // Добавляем обработчики событий клика к каждой кнопке сброса, позволяя пользователю сбросить выбранные опции фильтра.
    view.filter.resets.forEach(reset => reset.addEventListener('click', resetFilter))

    // Функция setFilter вызывается при клике на одну из опций фильтра.
    // Она считывает выбранную опцию и обновляет параметры фильтра в модели, а затем обновляет URL страницы, отражая выбранные параметры.
    function setFilter(e) {
        let params = {}
        // Находим ближайший родительский элемент, соответствующий фильтру.
        let filter = e.target.closest('[data-filter]')
        // Находим ближайший родительский элемент, соответствующий опции фильтра.
        let option = e.target.closest('[data-option-value]')

        // Задаем параметры фильтра на основе выбранной опции.
        params[filter.dataset.filter] = [option.dataset.optionValue]

        // Обновляем параметры модели фильтра и создаем новую строку параметров URL.
        model.setParams(params)
        model.createParamsUrl()

        // Обновляем строку запроса в адресной строке браузера, отражая новые параметры фильтра.
		// window.location.search = model.urlString

        sendRequest(params[filter.dataset.filter])
    }

    // Функция resetFilter вызывается при клике на кнопку сброса.
    // Она сбрасывает все параметры фильтра и очищает строку запроса в адресной строке браузера.
    function resetFilter(e) {
        model.resetParams()
        window.location.search = ''
    }

    function sendRequest(option) {
        
        console.log(option)

        if(option) {

            // Создаем новый экземпляр объекта для запросов
            var xhr = new XMLHttpRequest();

            // Конфигурируем его: POST-запрос на URL admin-ajax.php
            xhr.open('POST', ajaxurl, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            // Добавляем обработчик ответа сервера
            xhr.onload = function() {
                if (this.status >= 200 && this.status < 400) {
                    // Это вызывается при успешном получении ответа от сервера
                    view.coaches.parent.innerHTML = this.response;
                    // console.log(this.response);
                } else {
                    // Обрабатываем случай, когда сервер вернул ошибку
                    console.error(this.response);
                }
            };

            // Отправляем запрос
            xhr.send('action=coaches_type_search&coachingType=' + encodeURIComponent(option));

        }
    }
}
