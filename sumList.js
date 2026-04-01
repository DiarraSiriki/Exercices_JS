let list = [];
// list.split(' ').map(Number); 

// function sumList(list) {
//     let sum = 0;
//     for (let i = 0; i < list.length; i++) {
//         sum += list[i];
//     }
//     return sum;
// }

function sumList(list) {
    let sum = 0;
    for (list of list) {
        sum += list;
    }
    return sum;
}
console.log(sumList([1, 2, 3, 4, 5]));
