/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.


Example 1:

    Input: n = 3
    Output: ["1","2","Fizz"]

Example 2:

    Input: n = 5
    Output: ["1","2","Fizz","4","Buzz"]
 */


var fizzBuzz = function(n) {
    const output=[];
    for(let i=1 ;i<=n ;i++){
        if((i%3)===0 || (i%5)===0){
            let string='';
            if((i%3)===0){
                string+='Fizz';
            }
            if((i%5)===0){
                string+='Buzz';
            }
            output.push(string);
        }else{
            output.push(i.toString());
        }
    }
    return output;
};


// TODO : OPTIMIZED SOLUTION

var fizzBuzz = function(n) {
    const output = [];
    for (let i = 1; i <= n; i++) {
        let string = '';
        if (i % 3 === 0) {
            string += 'Fizz';
        }
        if (i % 5 === 0) {
            string += 'Buzz';
        }
        if (string === '') {
            string += i.toString();
        }
        output.push(string);
    }
    return output;
};
