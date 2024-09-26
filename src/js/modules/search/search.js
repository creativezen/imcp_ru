import searchView from "./searchView"

export function coach() {
    const view = new searchView()

    if (view.init() === false) {
        console.log('элемент id=search-coach не найден, проверь правильность разметки...')
        console.log('либо отключи данный скрипт, если он не используется...')
        return
    }

    view.search_coach.input.addEventListener('input', (e) => {
        let value = e.target.value.trim()
        
        e.target.value.trim().length >= 3
            ? view.search_coach.parent.classList.add('active')
            : view.search_coach.parent.classList.remove('active') 
    })
}