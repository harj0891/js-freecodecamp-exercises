const repeatString = function(stringToRepeat, numberOfTimes) {
    let repeatedString = '';

    if(numberOfTimes >= 0) {        
        for (i=0; i<numberOfTimes; i++) {
            repeatedString+=stringToRepeat;
        }

    } else {
        repeatedString = 'ERROR';
    }


    return repeatedString;

}

module.exports = repeatString
