function countWords(sentence) {
    let wordCount = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === " " || sentence[i] === ", ") {
            wordCount++;
        }
    }
    return wordCount + 1;
}
console.log(countWords("Hello world"))