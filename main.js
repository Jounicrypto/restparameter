/*
    Function 
        Rest Parameters
        Only one allowed
        Must be last element
*/


function calc(...numbers){

    let result = 0;
    
    for(let i = 0; i < numbers.length; i++){
        result += numbers[i]

    }
    return result;
}

console.log(calc(10,20,35,50,70,65));

const obj = {};
const key = "age";
obj[key] = 10;
console.log(obj);

