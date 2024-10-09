import Model from "./scrollModel"
import View from "./scrollView"


export function top() {
    let model = new Model()
    let view = new View()

    if (view.init() === false) {
        console.log('элемент id=#button-gotop не найден, проверь правильность разметки...')
        console.log('либо отключи данный скрипт, если он не используется...')
        return
    }

	window.addEventListener('scroll', toggleButton)
	/* view.buttonTop.addEventListener('click', scrollToTop) */
	
	/* function scrollToTop() {
		if(window.scrollY > 0) {
			window.scrollBy({
                top: 0,
                behavior : "smooth"
            });
			setTimeout(scrollToTop, 0)
		}
	} */

	function toggleButton() {
        view.trackScroll(
            model.getWinPosition(),
            model.getDocHeight()
        )
	}
}