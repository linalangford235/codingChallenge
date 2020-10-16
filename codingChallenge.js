//Problem 1 solution:

//I decided to solve the problem using a Stack which is a data type that contains a collection of elements with Push and Pop operations.
class Stack {
    constructor() {
      this.data = [];
    }
  
    push(element) {
      this.data.push(element);
    }
  
    pop() {
      return this.data.pop();
    }
  }
  
  const bracketMap = {
    "{": "}"
  };
  
  const findMatchingBrackets = str => {
    const stack = new Stack();

    for (let bracket of str) {
      
      if (bracketMap[bracket]) {
        stack.push(bracket);
      } else {
        const poppedBracket = stack.pop();

        if (bracketMap[poppedBracket] !== bracket) {
          return false;
        }
      }
    }
    return stack.data.length === 0;
  };


//Test Cases 
console.log(findMatchingBrackets("{}")); //returns true
console.log(findMatchingBrackets("}{")); //returns false
console.log(findMatchingBrackets("{{}")); //returns false
console.log(findMatchingBrackets("")); //returns true


//Problem 2 solution:

var sumOfMultiples = 0;
for (var i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sumOfMultiples += i;
  }
}
console.log(sumOfMultiples);