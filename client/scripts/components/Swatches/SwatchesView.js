class SwatchesView {
    constructor(controller) {
        this._controller = controller || {};

        this._init();
    }

    //
    // PRIVATE METHODS
    // ------------------------------

    _init() {
        this._enable();
        console.log('initialized SwatchesView');
    }

    _enable() {
        this._$swatchesContr = $('.js-swatches-wall');

        this._createHandlers();
    }

    _createHandlers() {
        this._$fieldLayout = $('.js-field-layout').on('change', this._controller.onChangeLayout);
    }

    //
    // EVENT HANDLERS
    // ------------------------------

    changeLayout(layout) {
        let styling = 'blocks js-swatches-wall';
        console.log('view layout: ', layout);

        if (layout !== 'auto') {
            styling += ` blocks_${layout}up`;
        }

        this._$swatchesContr.attr('class', styling);
    }


}

export default SwatchesView;
