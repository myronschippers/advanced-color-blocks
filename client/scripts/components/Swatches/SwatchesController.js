import SwatchesView from './SwatchesView.js';

class SwatchesController {
    constructor() {
        this._init();
    }

    //
    // PRIVATE METHODS
    // ------------------------------

    _init() {
        this._bindEventHandlers();
        console.log('initialized SwatchesController');
        this._view = new SwatchesView(this);
    }

    _bindEventHandlers() {
        this.onChangeLayout = this._onChangeLayout.bind(this);
    }

    //
    // EVENT HANDLERS
    // ------------------------------

    _onChangeLayout(event) {
        const layoutValue = event.target.value;
        this._view.changeLayout(layoutValue);
    }
}

export default SwatchesController;
