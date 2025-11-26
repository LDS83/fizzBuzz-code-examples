function fizzBuzz(n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
            result.push("FizzBuzzPop");
        } else if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0 && i % 7 === 0) {
            result.push("FizzPop");
        } else if (i % 5 === 0 && i % 7 === 0) {
            result.push("BuzzPop");

        }else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else if (i % 7 === 0) {
            result.push("Pop")
        }else {
            result.push(i);
        }
    }

    return result;
}


console.log(fizzBuzz(25))
console.log(fizzBuzz(5))
console.log(fizzBuzz(7))