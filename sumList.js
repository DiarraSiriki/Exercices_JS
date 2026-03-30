function sumList(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    return sum;
}
console.log(sumList([1, 2, 3, 4, 5, 6]));