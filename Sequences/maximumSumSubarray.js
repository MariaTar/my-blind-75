// Maximum Sum Subarray of Size K (Easy)

// Given an array of positive numbers and a positive number 'k,' 
// find the maximum sum of any contiguous subarray of size 'k'.

const findMaxSumSubArray = (k, arr) => {
    // TODO: k is subarray length
    let maxSum = 0;
    for(let i = 0; i <= arr.length - k; i++){
      const subArray = arr.slice(i, i+k);
      const newSum = subArray.reduce((acc, curr) => acc+curr,0);
      if(newSum > maxSum){
        maxSum = newSum
      }
    }
    return maxSum;
  };
  
  const testCase1 = findMaxSumSubArray(3, [2,1,5,1,3,2]);
  const testCase2 = findMaxSumSubArray(2, [2,3,4,1,5]);
  const testCase3 = findMaxSumSubArray(1, [1, 2, 3, 4, 5]);
  
  // Expect: 9, 7, 5
  console.log(testCase1,testCase2, testCase3)