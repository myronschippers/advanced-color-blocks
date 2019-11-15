class SwatchesController {
    constructor() {
        this._init();
    }

    //
    // PRIVATE METHODS
    // ------------------------------

    _init() {
        this._createEventHandlers();
    }

    _createEventHandlers() {
        $('.js-field-layout').on('change', this._onChangeLayout.bind(this));
    }

    //
    // EVENT HANDLERS
    // ------------------------------

    _onChangeLayout(event) {
        const layoutValue = event.target.value;
        console.log('change layout: ', layoutValue);
    }
}

export default SwatchesController;
