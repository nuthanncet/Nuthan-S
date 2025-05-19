let numberSeries = (x) => {
    const result = [];
    let num = 1;
    for(let i=0;i<x;i++){
        result.push(num)
        num +=2;
    }
    return result
}
console.log(numberSeries(4));
