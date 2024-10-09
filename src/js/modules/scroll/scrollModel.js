export default class Model {
	speed = -40

	getWinPosition() {
		return window.scrollY
	}

	getDocHeight() {
		return document.documentElement.clientHeight
	} 
}