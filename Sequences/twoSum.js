// Two sum (Easy)

// Given an array of integers nums and an integer target,
// return two distinct indices i and j such that the sum of nums[i]
// and nums[j] is equal to the target.

// You can assume that each input will have exactly one solution,
// and you may not use the same element twice.

const twoSum = (nums, target) => {
    let coords = [];
    let i = 0;
    
    do{
      const subs = target - nums[i];
      const j = nums.indexOf(subs, i+1);
      if(j >= 0){
        coords.push(i);
        coords.push(j);
      }else{
        i++;
      }
      
    }while(coords.length < 2)
    return coords
  }
  
  const res = twoSum([3,2,4], 6);
  const res1 = twoSum([-1, -2, -3, -4, -5], -8);
  const res2 = twoSum([10, 15, 21, 25, 30], 45);
  
  // Expected: [1,2]; [2,4]; [1,4];
  console.log(res, res1, res2);