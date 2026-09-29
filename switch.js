function calculator(num1, num2, operator){

    switch (operator) {

        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":
            if (num2 === 0) {
                return "Cannot divide by zero";
            }
            return num1 / num2;

        case "%":
            if (num2 === 0) {
                return "Cannot find remainder with zero";
            }
            return num1 % num2;

        default:
            return "Invalid operator";
    }
}

console.log(calculator(24,7, "*"));
console.log(calculator(20, 5, "/"));
console.log(calculator(66, 8, "/"));
console.log(calculator(4, 5, "^"));