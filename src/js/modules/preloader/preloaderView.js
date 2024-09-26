export default class preloaderView {
    preloader = {
        global: document.getElementById('preloader-global') || undefined,
        local: document.getElementById('preloader-local') || undefined
    }

    init() {
        if (this.preloader.global === undefined) {
            this.erorr('global')
            return false
        }

        if (this.preloader.local === undefined) {
            this.erorr('local')
        }
    }
    
    start(type) {
        // if (this.preloader[type] === undefined) return console.log(`элемент id=preloader-${type} не найден...`)
        this.preloader[type].classList.add('active')
    }

    stop(type) {
        // if (this.preloader[type] === undefined) return console.log(`элемент id=preloader-${type} не найден...`)
        this.preloader[type].classList.remove('active')
    }

    erorr(type) {
        console.log('---------------------------')
        console.log(`элемент id=preloader-${type} не найден...`)
        console.log('проверь правильность разметки, или отключи данный скрипт, либо проигнорируй это')
        console.log('---------------------------')
    }
}