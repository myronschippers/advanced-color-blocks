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
        this._render();
    }

    _enable() {
        this._$swatchesContr = $('.js-swatches-wall');
        this._$colorCount = $('.js-color-count');

        this._createHandlers();
    }

    _createHandlers() {
        this._$fieldLayout = $('.js-field-layout').on('change', this._onChangeLayout.bind(this));
        this._$addSwatchBtns = $('.js-btn-add-swatch').on('click', this._onClickAddSwatch.bind(this));
        this._$delete = this._$swatchesContr.on('click', '.js-color-card-delete', this._onClickDeleteSwatch.bind(this));
    }

    _render() {
        const swatchList = this._controller.swatches;
        let countDisplay = '0';

        this._$swatchesContr.empty();

        if (swatchList.length === 0) {
            this._$swatchesContr.append(`
                <li>There are currently no swatches to be displayed</li>
            `);
            return false;
        } else {
            const counts = this._controller.count;
            countDisplay = `
                <span class="pill">red: ${counts.red}</span> ,
                <span class="pill">yellow: ${counts.yellow}</span> ,
                <span class="pill">blue: ${counts.blue}</span> ,
                <span class="pill">green: ${counts.green}</span>
            `;
        }

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

        // adding the current count of colors to the DOM
        this._$colorCount.html(countDisplay).addClass;
    }

    //
    // EVENT HANDLERS
    // ------------------------------

    _onChangeLayout(event) {
        const layoutValue = event.target.value;
        let styling = 'blocks js-swatches-wall';

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

    _onClickDeleteSwatch(event) {
        const swatchId = event.target.dataset.swatchId;
        this._controller.deleteSwatch(swatchId);
        this._render();
    }
}

export default SwatchesView;
