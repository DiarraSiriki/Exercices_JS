let list = [];
// list.split(' ').map(Number); 

function sumList(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    return sum;
}
