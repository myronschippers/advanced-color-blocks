class SwatchesModel {
    constructor() {
        this._swatches = [];
    }

    addSwatch(color) {
        const firstChar = color.charAt(0);
        const label = color.replace(firstChar, firstChar.toUpperCase());

        this._swatches.push({
            label,
            color,
        });
        console.log('addSwatch color: ', color);
    }

    deleteSwatch(id) {
        console.log('deleteSwatch - id: ', id);
        const deletedSwatch = this._swatches.splice(id, 1);
        console.log('deletedSwatch: ', deletedSwatch);
    }

    get swatches() {
        return this._swatches;
    }
}

export default SwatchesModel;
