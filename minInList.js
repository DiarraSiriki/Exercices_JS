function minInList(list) {
    let min = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] < min) {
            min = list[i]
        }
    }
    return min;
}
console.log(minInList([1, 2, 3, 4, 5, ]))