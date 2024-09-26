import preloaderView from "./preloaderView"

export function init() {
    const view = new preloaderView()

    if (view.init() == false) return

    function on(type) {
        view.start(type)
    }

    function off(type) {
        view.stop(type)
    }

    return {
        on,
        off
    }
}