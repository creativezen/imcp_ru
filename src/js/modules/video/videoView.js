export default class videoView {
    video = {
        parent: document.getElementById('video') || undefined,
        buttons: null,
        modal: {
            video: null,
            close: null
        }
    }

    init() {
        if (this.video.parent === undefined) return false

        /* сохранили кнопки отзывов */
        this.video.buttons = this.video.parent.querySelectorAll('.js-button-video')
        /* сохранили контейнеры куда выводим отзыв в модальном окне */
        this.video.modal.video = document.getElementById('modal-video')

        return true
    }

    /* показываем попап с видео */
    showVideo(title, content) {
        this.insertVideo(content, title)
    }

    /* формимуре разметку для показа */
    insertVideo(content, title) {
        let html = `<iframe width="100%" height="600" src="https://www.youtube.com/embed/${content}" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        this.video.modal.video.insertAdjacentHTML('beforeend', html)
    }

    /* очищаем разметку после закрытия попапа */
    cleanModal() {
        this.video.modal.video.innerHTML = ''
    }
}