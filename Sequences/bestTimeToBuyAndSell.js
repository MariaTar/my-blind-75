// Best Time to Buy and Sell (Easy)

// You are given an array prices where prices[i] is the price of a given stock on the  day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing 
// a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

const bestTime = (prices) => {
    let profit = 0;
    for(let i = 0; i< prices.length-1; i++){
      const maybeProfit = prices.slice(i+1).sort((a,b) => b - a)[0] - prices[i];
      
      profit = maybeProfit > profit ? maybeProfit : profit;
    }
    
    return profit;
  }
    
    const testCase1 = bestTime([3, 2, 6, 5, 0, 3]);
    const testCase2 = bestTime([8, 6, 5, 2, 1]);
    const testCase3 = bestTime([1, 2]);
    const testCase4 = bestTime([1, 2, 3, 4, 5]);
    
    // Expected: 4, 0, 1, 4
    console.log(testCase1,testCase2,testCase3, testCase4)