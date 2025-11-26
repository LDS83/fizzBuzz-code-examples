function isFizzBuzz(sequence) {
    const expected = [];

    for (let i = 1; i <= sequence.length; i++) {
        if (i % 15 === 0) {
            expected.push("FizzBuzz");
        } else if (i % 3 === 0) {
            expected.push("Fizz");
        } else if (i % 5 === 0) {
            expected.push("Buzz");
        } else {
            expected.push(i);
        }
    }


    const isCorrect = sequence.length === expected.length && 
    sequence.every((value, index) => value === expected[index] );

    return { isCorrect, expected};
}


console.log(isFizzBuzz([1, 2, "Fizz", 4, 9]))
console.log(isFizzBuzz([1, 5, "Buzz", 8, "FizzBuzz"]))
console.log(isFizzBuzz([1, 2, "Fizz", 4 ,"Buzz" ]))
console.log(isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7]))