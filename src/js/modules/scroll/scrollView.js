export default class view {
    topId = document.getElementById('up')
    buttonTop = null

    init() {
        if (this.buttonTop === undefined) return false

        this.buttonTop = document.querySelector('.js-button-top')
        return true
    }

    trackScroll = (position, height) => {
        position > (height * 4)
			? this.buttonTop.classList.add('active')
			: this.buttonTop.classList.remove('active')
	}
}