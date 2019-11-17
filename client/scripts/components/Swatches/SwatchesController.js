import SwatchesView from './SwatchesView.js';
import SwatchesModel from './SwatchesModel.js';

class SwatchesController {
    constructor() {
        this._init();
    }

    //
    // PRIVATE METHODS
    // ------------------------------

    _init() {
        this._model = new SwatchesModel();
        this._view = new SwatchesView(this);
    }

    //
    // PUBLIC METHODS
    // ------------------------------

    addSwatch(color) {
        this._model.addSwatch(color);
    }

    deleteSwatch(id) {
        this._model.deleteSwatch(id);
    }

    //
    // GETTERS & SETTERS
    // ------------------------------

    get swatches() {
        return this._model.swatches;
    }
}

export default SwatchesController;
