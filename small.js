// Write a function:

// smallestNumber(numbers)

// that returns the smallest number in an array.

// Example:

// smallestNumber([45, 12, 78, 3, 29])

// Expected output:

// 3

// Requirements:

// Use a for loop
// Use if
// Do not use Math.min()
// Do not use sort()
// Return the answer

// Bonus: Try solving it without using numbers[0] as your starting value.

function smallestNumber(numbers){
    let smallest = numbers[0];

    for(i= 0 ; i<numbers.length ; i++){
        if(numbers[i]<smallest){
            smallest = numbers[i];       
        }
    }

    return smallest;
}

console.log(smallestNumber([12,312,42,122,34,324,44,424,324]))