import videoView from "./videoView"

export function modal() {
    const view = new videoView()

    /* инициализируем скрипт */
    if (view.init() === false) {
        console.log('id="video" не найден, проверь правильность разметки...')
        console.log('либо отключи данный скрипт, если он не используется...')
        return
    }

    view.video.buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            /* получили все данные вызываемого окна */
            let thisButton = e.target.closest('.js-button-video')
            let title = thisButton.dataset.title
            let content = thisButton.dataset.content

            /* вызвали генерацию разметки и ее вывод в окне */
            view.showVideo(title, content)
        })
    })

    document.addEventListener('click', function(e) {
        /* если окно закрываем */
        if (e.target.classList.contains('js-close') || e.target.classList.contains('js-modal')) {
            /* очищаем контейнер окна, чтобы следующей вызов не дублировал содержимое */
            view.cleanModal()
        }
    })
}
