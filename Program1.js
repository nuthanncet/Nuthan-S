let calculator = (a,b,operation) => {
    operation = operation.toLowerCase();

    switch(operation) {
        case 'add': return a+b;
        case 'subtract': return a-b;
        case 'multiply' : return a*b;
        case 'divide' : if(b===0){
            return 'cannot divide by 0'
        }
        return a/b
        default : return 'invalid operation'
    }
}
console.log(calculator(10,5, 'add'))
