export default class View {
    forms = document.querySelectorAll('.js-form') || undefined

    contacts = {
        parent: document.getElementById('form-contacts') || undefined,
        email: null,
        email_error: null,
    }
    
    init() {
        /* инициализируем формы */
        if (this.forms === undefined) return false

        /* проверяем наличие формы контактов */
        if (this.contacts.parent !== undefined) {
            this.contacts.email = this.contacts.parent.querySelector('.js-input-email')
            this.contacts.email_error = this.contacts.parent.querySelector('[data-error="email"]')
        }

        return true
    }
}