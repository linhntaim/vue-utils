import {DomSelection} from './dom-selection'

export class Ui {
    constructor() {
        this.selectElement = document.body.createTextRange ?
            element => {
                (range => {
                    range.moveToElementText(element)
                    range.select()
                })(document.body.createTextRange())
            } : (window.getSelection ?
                element => {
                    ((selection, range) => {
                        range.selectNodeContents(element)
                        selection.removeAllRanges()
                        selection.addRange(range)
                    })(window.getSelection(), document.createRange())
                } : element => element)
    }

    openWindow(url = null, target = null, features = null, replace = null) {
        return window.open(url, target, features, replace)
    }

    setLang(lang) {
        document.querySelector('html').setAttribute('lang', lang)
    }

    scrollToTop() {
        window.scrollTo(0, 0)
    }

    scrollToBottom() {
        window.scrollTo(0, document.body.scrollHeight)
    }

    reloadPage() {
        window.location.reload()
    }

    selectText(elementId) {
        this.selectElement(document.getElementById(elementId))
    }

    query(selector) {
        return new DomSelection(document.querySelectorAll(selector))
    }
}
