export default class Building {
    constructor(sqft) {
        if (this.constructor === 'Building')
            throw new Error("Cannot instantiate abstract class")
        if (typeof evacuationWarningMessage !== 'function')
            throw new Error("Class extending Building must override evacuationWarningMessage");
	this._sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }

    set sqft(sqft) {
        this._sqft = sqft;
    }
}
