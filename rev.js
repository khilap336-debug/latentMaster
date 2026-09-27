function reverseArray(numbers) {
    let result = [];

    for (let i = 4; i >= 0; i--) {
        result.push(numbers[i]);
    }

    return result;
}

console.log(reverseArray([131,546,868,53,5,465,93,35]))