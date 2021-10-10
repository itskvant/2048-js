const randomTiles = (num, width, matrix) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        let rowIndex = Math.floor(Math.random() * width);
        let tileIndex = Math.floor(Math.random() * width);
        arr.push([rowIndex, tileIndex]);
    }
    let same = false;
    for (let i = 0; i < arr.length - 1; i++) {
        if (!same) {
            same = arr[i].every((v, j) => v === arr[i + 1][j]);
        }
    }
    let occupied = false;
    for (let i = 0; i < arr.length; i++) {
        if (!occupied) {
            console.log(arr[i])
            const tileContainer = matrix[arr[i][0]][arr[i][1]];
            if (tileContainer._tile) {
                occupied = true;
            }
        }
    }

    if (!same && !occupied) {
        return arr;
    } else {
        return randomTiles(num, width, matrix);
    }
}

const emptySpaces = matrix => {
    let hasEmptySpaces = false;
    for (let i = 0; i < matrix.length; i++) {
        if (!hasEmptySpaces) {
            hasEmptySpaces = matrix[i].every((val, j) => matrix[i][j].tileContainer._tile === undefined);
        }
    }
    return hasEmptySpaces;
}

const genMatrix = width => {
    let matrix = [];
    for (let i = 0; i < width; i++) {
        let row = [];
        for (let j = 0; j < width; j++) {
            const div = document.createElement('div');
            div.classList.add('tile-container');
            const tileContainer = new TileContainer(div);
            row.push(tileContainer)
        }
        matrix.push(row);
    }
    return matrix;
}

const addTile = (matrix, arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        const tileContainer = matrix[arr[i][0]][arr[i][1]];
        const tileDiv = document.createElement('div');
        tileDiv.classList.add('tile')
        tileContainer.tile = new Tile(tileDiv, value);
    }
}

const drawMatrix = (matrix, grid) => {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            const divToAppend = matrix[i][j].el;
            if (matrix[i][j]?._tile) {
                const tileEl = matrix[i][j]._tile.el;
                tileEl.textContent = matrix[i][j]._tile.value
                divToAppend.appendChild(tileEl)
            }
            grid.appendChild(divToAppend);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const grid  = document.querySelector('.grid');
    const width = 4

    // gen matrix
    let matrix = genMatrix(width);
    // get random idxs
    let randIdxs = randomTiles(2, width, matrix);
    // add the tiles to the tile containers with those idxs
    addTile(matrix, randIdxs, 2);
    drawMatrix(matrix, grid);
    window.addEventListener('keydown', (event) => {
        const keyCode = event.code;
        if (keyCode == "Space") {
            let randIdxs = randomTiles(2, width, matrix);
            // add the tiles to the tile containers with those idxs
            if (emptySpaces(matrix)) {
                addTile(matrix, randIdxs, 2);
                drawMatrix(matrix, grid);
            }
        }
    })
});

class TileContainer {
    /**
     * 
     * @param {HTMLDivElement} el 
     * @param {Tile} tile 
     */
    constructor (el, tile) {
        this.el = el;
    }
    set tile(tile) {
        this._tile = tile;
        this.el.appendChild(tile.el);
    }
} 

class Tile {
    /**
     * 
     * @param {HTMLDivElement} el 
     * @param {Number} value 
     */
    constructor (el, value) {
        this.el = el;
        this.value = value;
    }
}