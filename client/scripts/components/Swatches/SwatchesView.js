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
        this._$fieldLayout = $('.js-field-layout').on('change', this._onChangeLayout.bind(this));
        this._$addSwatchBtns = $('.js-btn-add-swatch').on('click', this._onClickAddSwatch.bind(this));
    }

    _render() {
        const swatchList = this._controller.swatches;
        console.log('swatchList: ', swatchList);

        this._$swatchesContr.empty();
        for (let i = 0; i < swatchList.length; i++) {
            const indvSwatch = swatchList[i];

            this._$swatchesContr.append(`
                <li>
                    <div class="colorCard">
                        <div class="colorCard-swatch colorCard-swatch_${indvSwatch.color}"></div>
                        <div class="colorCard-label">
                            <h4>${indvSwatch.label}</h4>
                        </div>
                        <div class="colorCard-action">
                            <button class="btn js-color-card-delete" data-swatch-id="${i}">Delete</button>
                        </div>
                    </div>
                </li>
            `);
        }
    }

    //
    // EVENT HANDLERS
    // ------------------------------

    _onChangeLayout(event) {
        const layoutValue = event.target.value;
        let styling = 'blocks js-swatches-wall';
        console.log('view layout: ', layoutValue);

        if (layoutValue !== 'auto') {
            styling += ` blocks_${layoutValue}up`;
        }

        this._$swatchesContr.attr('class', styling);
    }

    _onClickAddSwatch(event) {
        const newColor = event.target.dataset.color;
        this._controller.addSwatch(newColor);
        this._render();
    }
}

export default SwatchesView;
