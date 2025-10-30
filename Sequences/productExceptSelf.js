// Product of Array Except Self (medium)

// Given an array of integers, 
// return a new array where each element at index i of the new array 
// is the product of all the numbers in the original array except the one at i. 
// You must solve this problem without using division.

const productExceptSelf = (arr) => {
    const productArray = [];
    
    for(let i = 0; i < arr.length; i++){
      const subArray = arr.map((a,j) => i == j ? 1 : a);
      const multiplied = subArray.reduce((acc, curr) => acc * curr, 1);
      productArray.push(multiplied)
    }
    return productArray
    };
    
    const testCase1 = productExceptSelf([2, 3, 4, 5]);
    const testCase2 = productExceptSelf([1, 1, 1, 1]);
    const testCase3 = productExceptSelf([10, 20, 30, 40]);
    
    // Expect: [60, 40, 30, 24], [1, 1, 1, 1], [24000, 12000, 8000, 6000]
    console.log(testCase1,testCase2, testCase3)