import accordionView from './accordionView'


export function init() {
	const view = new accordionView()

	// бежим по аккордеонам
	view.element.accordions.forEach(accordion => {
		accordion.addEventListener('click', function (e) {
			let currentItem = e.target.closest('[data-item]')
			view.showAccordion(currentItem)
		})
	})
}
