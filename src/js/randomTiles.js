export const randomTiles = (num, width) => {
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
    console.log(same)
    if (!same) {
        return arr;
    } else {
        return randomTiles(num, width);
    }
}
