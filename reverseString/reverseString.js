const reverseString = function(stringToReverse) {
    let revString ='';

    if (stringToReverse !== null) {
        
        for (i= 1; i <= stringToReverse.length; i++) {            
            revString += stringToReverse[stringToReverse.length -i]
        }


    } else {
        revString = 'String is null'
    }

    return revString;
}

module.exports = reverseString
