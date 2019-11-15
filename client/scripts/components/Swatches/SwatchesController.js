import SwatchesView from './SwatchesView.js';

class SwatchesController {
    constructor() {
        this._init();
    }

    //
    // PRIVATE METHODS
    // ------------------------------

    _init() {
        console.log('initialized SwatchesController');
        this._view = new SwatchesView(this);
    }
}

export default SwatchesController;
