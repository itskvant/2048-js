export const drawBoard = (matrix, grid) => {
    for (let row = 0; row < matrix.length; row++) {
        for (let tileIdx = 0; tileIdx < matrix.length; tileIdx++) {
            grid.appendChild(matrix[row][tileIdx].el);
        }
    }
}