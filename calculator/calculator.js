function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (numberArray) {

	let total =0;

	for (number in numberArray) {
		if (numberArray[number] != "") {
			total += numberArray[number];
		} else {
			continue;
		}
		
	}

	return total;
}


function multiply (numberArray) {
	let total =1;

	for (number in numberArray) {
		if (numberArray[number] != "") {
			total *= numberArray[number];
		} else {
			continue;
		}
		
	}

	return total;
}

function power(number,power) {
	let total =1;

	for(let i=0; i < power;i++) {
		total *=number;
	}

	return total;
}

function factorial(num) {
	let factorialRes=num;

	if (num != 0) {
		for (i=1; i < num; i++) {
			factorialRes *= i;
		}
	} else {
		factorialRes=1;
	}
	
	return factorialRes;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}