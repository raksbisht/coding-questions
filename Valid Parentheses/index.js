/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.


    Example 1:

    Input: s = "()"
    Output: true
    Example 2:

    Input: s = "()[]{}"
    Output: true
    Example 3:

    Input: s = "(]"
    Output: false

Flipkart
Amazon
Microsoft
OYO Rooms
Snapdeal
Oracle
Walmart
Adobe
Google
Yatra.com
*/

function isValid(s){
    const stack = [];
    const mapping = {
        '(' : ')',
        '{' : '}',
        '[' : ']',
    };

    for(let i=0; i < s.length; i++){
        const curCar = s[i];
        if(mapping[curCar]){
            stack.push(mapping[curCar]);
            console.log(stack)
        }else if(curCar != stack.pop()){
            return false;
        }
    }
    console.log(stack);
  return stack.length===0
}

function isValid(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const bracket = s[i];

        if (bracket === '(' || bracket === '{' || bracket === '[') {
            stack.push(bracket);
        } else {
            const lastBracket = stack.pop();
            if ((lastBracket === '(' && bracket !== ')') ||
                (lastBracket === '{' && bracket !== '}') ||
                (lastBracket === '[' && bracket !== ']')) {
                return false;
            }
        }
    }

    return stack.length === 0;
}


// console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
// console.log(isValid("(]")); // false
// console.log(isValid("([)]")); // false
// console.log(isValid("{[]}")); // true
