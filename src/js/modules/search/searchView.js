export default class searchView {
    search_coach = {
        parent: document.getElementById('search-coach') || undefined,
        input: null
    }

    init() {
        if (this.search_coach.parent === undefined) return false

        this.search_coach.input = this.search_coach.parent.querySelector('.js-search-input')
        
        return true
    }
}