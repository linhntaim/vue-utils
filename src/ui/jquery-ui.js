import {Ui} from './ui'
import {JqueryDomSelection} from './jquery-dom-selection'
import $ from 'jquery'

export class JqueryUi extends Ui {
    scrollToTop() {
        window.scrollTo(0, 0)
    }

    scrollToBottom() {
        window.scrollTo(0, document.body.scrollHeight)
    }

    /**
     *
     * @param selector
     * @returns {JqueryDomSelection}
     */
    query(selector) {
        return new JqueryDomSelection($(selector))
    }
}
