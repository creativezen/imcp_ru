import ForwebModal from './modules/modal/ForwebModal.js'

import * as form from './modules/form/form'
import * as menu from './modules/menu/menu'
import * as accordion from './modules/accordion/accordion'
// import * as preloader from './modules/preloader/preloaderController'
import * as scroll from './modules/scroll/scroll'

// Модель классов для решений FORWEB.AGENCY
const FORWEB_UI = {
    modal: 'forweb-modal',
  }

document.addEventListener('DOMContentLoaded', function(e) {

    // Создали экземпляры объектов
	const modal = new ForwebModal(null, FORWEB_UI.modal)
	// Поместили экземпляр класса ForwebModal в глобальную область видимости
	window.modal = modal
	// Поместили функцию preloader в глобальную область видимости
    /* window.preloader = preloader.init() */

    // вызов основных методов
    menu.mobile()
    menu.scroll()
    form.validate()
    accordion.init()
    scroll.top()
})

