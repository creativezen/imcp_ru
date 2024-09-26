import * as dropdown from './modules/dropdown/dropdown'
import * as search from './modules/search/search'


window.addEventListener('DOMContentLoaded', ()=> {
    window.initDropdown = dropdown
    window.initFilter = filter

    search.coach()
    dropdown.standart()
})