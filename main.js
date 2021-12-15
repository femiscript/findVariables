
function greaterThanVariable(arrGreater, x, z) {
    let newArrrayNumbers = [];
    arrGreater.forEach(function (arrFigures) {
        if (arrFigures >= x && arrFigures <= z) {
            newArrrayNumbers.push(arrFigures);
        }
    })
    console.log(newArrrayNumbers.length);
}
greaterThanVariable([2, 3, 0, 1, 7], 4, 8)
greaterThanVariable([3, 3, 3, 5, 18, 6, 20], 15, 30)
greaterThanVariable([4, 6, 2, 6, 7, 7], 0, 7)