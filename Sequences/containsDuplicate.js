// Contains Duplicate (Easy)

// Given an integer array nums,
// return true if any value appears at least twice in the array,
// and return false if every element is distinct.

const containsDuplicate = (nums) => {
    const numsSet = new Set(nums);
    return nums.length > numsSet.size;
  }

const testCase1 = containsDuplicate([1,2,3,4]);
const testCase2 = containsDuplicate([1,2,3,1]);
const testCase3 = containsDuplicate([3, 2, 6, -1, 2, 1]);

// Expected: false, true, true
console.log(testCase1,testCase2,testCase3);