export const genMatrix = (width) => {
    matrix = [];
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

