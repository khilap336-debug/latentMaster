function power(base, exponent) {
    let result = 1;

    for (let i = 1; i <= exponent; i++) {
        result = result * base;
    }

    return result;
}

console.log(power(6,2));