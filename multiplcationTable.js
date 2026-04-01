function multiplicationTable(n) {

    for (let i = 1; i <= 10; i++) {
        let resultat = n * i;
        let table = `${n} x ${i} = ${resultat}`;
        console.log(table);
    }

    return table
}

