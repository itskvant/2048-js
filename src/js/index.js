class Tile {
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

const drawBoard = (matrix, grid) => {
    for (let row = 0; row < matrix.length; row++) {
        for (let tileIdx = 0; tileIdx < matrix.length; tileIdx++) {
            grid.appendChild(matrix[row][tileIdx].el);
        }
    }
}

const genMatrix = (width) => {
    let matrix = [];
    for (let row = 0; row < width; row++) {
        let row = [];
        for (let tileIdx = 0; tileIdx < width; tileIdx++) {
            const divEl = document.createElement('div');
            const newTile = new Tile(divEl, 0);
            row.push(newTile)
        }
        matrix.push(row);
    }
    return (matrix);
}

const addTiles = (idxArr, valArr, matrix) => {
    for (let i = 0; i < idxArr.length; i++) {
        matrix[idxArr[i][0]][idxArr[i][1]] = new Tile(matrix[idxArr[i][0]][idxArr[i][1]].el, valArr[i]);
    }
}

const randomTiles = (num, width) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        let rowIndex = Math.floor(Math.random() * width);
        let tileIndex = Math.floor(Math.random() * width);
        arr.push([rowIndex, tileIndex]);
    }
    let same = false;
    for (let i = 0; i < arr.length - 1; i++) {
        if (!same) {
            same = arr[i].length == arr[i + 1].length && arr[i].every((v, j)=> v === arr[i + 1][j]);
        }
    }

    if (!same) {
        return arr;
    } else {
        return randomTiles(num, width);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const grid  = document.querySelector('.grid');
    const width = 4;
    let matrix = genMatrix(width);
    console.log(matrix);
    let rTiles = randomTiles(2, width)
    addTiles(rTiles, [2, 2], matrix);
    drawBoard(matrix, grid);
    window.addEventListener('keydown', (event) => {
        const keyCode = event.code
        console.log(keyCode)
        if (keyCode == "Space") {
            let rTiles = randomTiles(2, width);
            addTiles(rTiles, [2, 2], matrix);
            drawBoard(matrix, grid);
        }
    })
});
