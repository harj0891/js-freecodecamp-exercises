const palindromes = function(sentence) {

    let origSentenceArr = sentence.toLowerCase().match(/\w/ig);
    let revSentenceArr = [...origSentenceArr].reverse();
    
    let originalSentence = origSentenceArr.join("");
    let revSentence = revSentenceArr.join("");

    
    return (originalSentence === revSentence) ? true : false;

}

module.exports = palindromes
