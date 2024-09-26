import Inputmask from 'inputmask'
import View from './view'
import Model from './model'

// INPUTMASK FOR PHONE
export const mask = () => {
  const telInputArray = Array.from(document.querySelectorAll('input[type="tel"]'))

  if (telInputArray.length) {
    telInputArray.forEach((input) => {
      const inputMask = new Inputmask('+1 (999) 999-99-99')
      inputMask.mask(input)
    })
  }
}

/* Проверяем корректность заполнения поля email */
export const validate = () => {
    const view = new View()
    const model = new Model()

    /* Если на странице не найдены формы */
    if (view.init() === false) {
        return console.log('Формы на странице не обнаружены. Проверь разметку, или отключили данный скрипт')
    }

    /* Если на странице есть форма контактов */
    if (view.contacts.parent !== undefined) {
        view.contacts.email.addEventListener('keyup', emailValidate)
    }

    function emailValidate(e) {
        let value = e.target.closest('input').value

        if (value.length === 0) {
            view.contacts.email_error.classList.add('none')
            return
        }

        model.validation.email = value.match(model.pattern.email)
        
        model.validation.email
            ? view.contacts.email_error.classList.add('none')
            : view.contacts.email_error.classList.remove('none')
    }
}