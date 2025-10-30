// Valid Parentheses (Easy)

// Determine if an input string containing only the characters '(', ')', '{', '}', '[', and ']' is valid.
// A string is considered valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Each close bracket has a corresponding open bracket of the same type.

const isValid = (s) => {
    if(s.length % 2 ){
      return false;
    }
    const pairs = {']':'[', '}':'{', ')':'('};
    const result = []
    for(let i = 0; i < s.length; i++){
      if(i > 0 && result.slice(-1) == pairs[s[i]]){
        result.pop()
      }else{
        result.push(s[i])
      }
    }
    return result.length == 0
  }
    
    const testCase1 = isValid("()");
    const testCase2 = isValid("()[]{}");
    const testCase3 = isValid("(]");
    const testCase4 = isValid("{[]}");
    
    // Expect: true, true, false, true
    console.log(testCase1,testCase2,testCase3,testCase4)