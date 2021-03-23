const sumAll = function(start, finish) {
    

    if (typeof start != 'number' || typeof finish != 'number' || start < 0 || finish < 0){
        return 'ERROR';
    }

    // creating range of numbers
    
    let range = [];
    let sumOfRange = 0;

    let startNumber=0;
    let finishNumber=0;


    
    if (finish < start) {
        startNumber = finish;
        finishNumber = start;
    } else if (start < finish) {
        startNumber = start;
        finishNumber = finish;
    }  

    let currentNumber = startNumber;
    while (currentNumber <= finishNumber) {
        range.push(currentNumber);
        currentNumber++;
    }

    // sum up items in range
    range.forEach(element => {
        sumOfRange += element;
    });
    

    return sumOfRange;
}

module.exports = sumAll
