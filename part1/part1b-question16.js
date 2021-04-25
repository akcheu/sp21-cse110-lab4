for (carColor in statistics) {
    if (carColor[0] == 'r' || statistics[carColor] % 2 != 0) {
        console.log(statistics[carColor]);
    }
}