function mode(numbers) {
    let count = 0;
    let max = null;

    for (let i = 0; i < numbers.length; i++) {
        if (count === 0) {
            max = numbers[i];
        }

        if (numbers[i] === max) {
            count++;
        } else {
            count--;
        }
    }

    return max;
}

console.log(mode([1,4,4,2,5,2,9,7,7,7,9,2,3,5,7,8,0,8,8,4,1,5,3,,7]));