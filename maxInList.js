function maxInList(list) {
    let max = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i]
        }
    }
    return max;
}
console.log(maxInList([1, 2, 3, 4, 5, ]))