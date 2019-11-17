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
    }

    deleteSwatch(id) {
        const deletedSwatch = this._swatches.splice(id, 1);
    }

    get swatches() {
        return this._swatches;
    }
}

export default SwatchesModel;
