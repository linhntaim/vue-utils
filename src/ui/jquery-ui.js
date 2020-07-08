import {Ui} from './ui'
import {JqueryDomSelection} from './jquery-dom-selection'

export class JqueryUi extends Ui {
    scrollToTop() {
        window.$('html, body').animate({
            scrollTop: 0,
        }, 500, 'easeOutExpo')
    }

    scrollToBottom() {
        window.$('html, body').animate({
            scrollTop: document.body.scrollHeight,
        }, 500, 'easeOutExpo')
    }

    /**
     *
     * @param selector
     * @returns {JqueryDomSelection}
     */
    query(selector) {
        return new JqueryDomSelection(window.$(selector))
    }
}
