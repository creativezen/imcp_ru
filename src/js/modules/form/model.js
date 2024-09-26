export default class Model {
    form = {
        service: {
            title: null
        }
    }

    validation = {
        email: false
    }

    pattern = {
        email: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    }
}