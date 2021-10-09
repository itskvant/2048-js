export class Tile {
    /**
     * 
     * @param {HTMLDivElement} el 
     * @param {Number} value 
     */
    constructor(el, value) {
        this.el = el;
        el.innerHTML = value;
        this.value = value;
    }
}