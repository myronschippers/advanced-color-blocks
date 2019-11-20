class SwatchesModel {
    constructor() {
        this._swatches = [];
    }

    _getColorCount(color) {
        return this._swatches.filter(function(item) {
            return item.color === color;
        }).length;
    }

    addSwatch(color) {
        const firstChar = color.charAt(0);
        // capitalizing the first letter in the string
        const label = color.replace(firstChar, firstChar.toUpperCase());

        this._swatches.push({
            label,
            color,
        });
    }

    deleteSwatch(id) {
        const deletedSwatch = this._swatches.splice(id, 1);
    }

    get redCount() {
        return this._getColorCount('red');
    }

    get yellowCount() {
        return this._getColorCount('yellow');
    }

    get blueCount() {
        return this._getColorCount('blue');
    }

    get greenCount() {
        return this._getColorCount('green');
    }

    get swatches() {
        return this._swatches;
    }
}

export default SwatchesModel;
