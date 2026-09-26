function largestNumber(number){
    let largest = number[0];

    for(i=0 ; i<number.length ; i++){
        if(number[i]>largest){
            largest = number[i];
        }
    }
    return largest;
}

console.log(largestNumber([21,33,73,-3,32,38,90]))