let numberSeries = (x) => {
    const result = [];
    let num = 1;
    while(num <= x){
        result.push(num)
        num +=2;
    }
    return result
}
console.log(numberSeries(4));
