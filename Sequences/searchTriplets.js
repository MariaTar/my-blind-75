// Triplet Sum to Zero (medium)

// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

const searchTriplets = (arr) => {
    arr.sort((a,b) => a - b);
      const triplets = [];
      let tripletsStringCopy;
      
      for(let i = 0; i < arr.length-1; i++){
        const sum = -arr[i];
        const subArr = arr.slice(i+1);
        let startPointer = 0;
        let endPointer = subArr.length - 1;
        
        do{
          tripletsStringCopy = JSON.stringify(triplets);
          const maybeTriplet = [arr[i], subArr[startPointer], subArr[endPointer]];
          const isNew = !tripletsStringCopy.includes(maybeTriplet);
          
           if((subArr[startPointer] + subArr[endPointer] == sum)){
            isNew && triplets.push(maybeTriplet);
            
            startPointer++;
            endPointer--;
          }
          if(subArr[startPointer] + subArr[endPointer] < sum){
            startPointer++;
          }
          if(subArr[startPointer] + subArr[endPointer] > sum){
            endPointer--;
          }
        }while(startPointer < endPointer)
      }
      
      return triplets;
    };
    
    const testCase1 = searchTriplets([-3, 0, 1, 2, -1, 1, -2]);
    const testCase2 = searchTriplets([-5, 2, -1, -2, 3]);
    const testCase3 = searchTriplets([0, 0, 0]);
    
    // Expect: 
    // [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
    // [[-5, 2, 3], [-2, -1, 3]]
    // [[0,0,0]]
    console.log(testCase1);
    console.log(testCase2);
    console.log(testCase3);