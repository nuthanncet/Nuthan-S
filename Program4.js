let multipleNum =(arr) => {
    const div = [1,2,3,4,5,6,7,8,9]
    const result = {};

    for(let i=0; i<div.length; i++){
        const divisor = div[i];
        result[divisor] =0;

        for(let j=0; j< arr.length;j++){
            if(arr[j] %divisor === 0){
                result[divisor]++;
            }
        }
    }
    return result
}
console.log(multipleNum([1,2,8,9,12,46,76,82,15,20,30]))
