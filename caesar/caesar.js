const caesar = function(origSentence, shiftNumber) {

    const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
                        
    const origLetterArray = origSentence.split("");
    const cipherArray = [];

    for (letter in origLetterArray) {
        let isLetterCaseUpper;
        let nonAlphabetCharacter;
        let letterIndex;
        let cipherIndex;

        if (origLetterArray[letter].match(/[^A-Za-z]/i)) {
            nonAlphabetCharacter = origLetterArray[letter];
        } else if (origLetterArray[letter] == origLetterArray[letter].toUpperCase()) {
            isLetterCaseUpper = true;
            letterIndex = alphabet.indexOf(origLetterArray[letter]);
            cipherIndex = letterIndex + shiftNumber;
        } else if (origLetterArray[letter] == origLetterArray[letter].toLowerCase()) {
            isLetterCaseUpper = false;
            letterIndex = alphabet.indexOf(origLetterArray[letter].toUpperCase());
            cipherIndex = letterIndex + shiftNumber;
        } 
                
        // if cipherIndex larger than alphabet then wrap around
        while (cipherIndex > alphabet.length - 1) {
            cipherIndex -= alphabet.length;
        }
                
        // if cipherIndex negative value then wrap around
        while (cipherIndex < 0) {
            cipherIndex += alphabet.length;
        }
        
        // push into cipherArray with correct case
        if (cipherIndex != null && isLetterCaseUpper) {
            cipherArray.push(alphabet[cipherIndex]);
        } else if (cipherIndex != null && !isLetterCaseUpper) {
            cipherArray.push(alphabet[cipherIndex].toLowerCase());
        } else {
            cipherArray.push(nonAlphabetCharacter);
        }

    }

    return cipherArray.join('');

}

module.exports = caesar
