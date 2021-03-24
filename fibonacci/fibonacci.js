const fibonacci = function(fibonacciIndex) {

    let fibonacciArray = [];

    if(fibonacciIndex < 0) {
        return "OOPS";
    }

    for (let i=0; i < fibonacciIndex; i++) {     
        let currfibonacci;
        if (i==0 || i==1) {
            fibonacciArray.push(1);
        } else {
            currfibonacci = fibonacciArray[i-1] + fibonacciArray[i-2];
            fibonacciArray.push(currfibonacci);
        }
    }



    return fibonacciArray[fibonacciIndex-1];

}

console.log("test");
console.log(fibonacci(6));

module.exports = fibonacci
