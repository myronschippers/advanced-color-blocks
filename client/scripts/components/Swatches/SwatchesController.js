import SwatchesView from './SwatchesView.js';

class SwatchesController {
    constructor() {
        this._init();
    }

    //
    // PRIVATE METHODS
    // ------------------------------

    _init() {
        this._swatches = [];
        console.log('initialized SwatchesController');
        this._view = new SwatchesView(this);
    }

    //
    // PUBLIC METHODS
    // ------------------------------

    addSwatch(color) {
        const firstChar = color.charAt(0);
        const label = color.replace(firstChar, firstChar.toUpperCase());

        this._swatches.push({
            label,
            color,
        });
        console.log('addSwatch color: ', color);
    }

    //
    // GETTERS & SETTERS
    // ------------------------------

    get swatches() {
        return this._swatches;
    }
}

export default SwatchesController;
