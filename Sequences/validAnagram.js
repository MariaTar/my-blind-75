// Valid Anagram (easy)

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// using all the original letters exactly once.

const isAnagram = (s,t) => {
    return s.split('').sort().join('') === t.split('').sort().join('');
}
  
  const testCase1 = isAnagram("listen","silent");
  const testCase2 = isAnagram("hello","world");
  const testCase3 = isAnagram("anagram","nagaram");
  const testCase4 = isAnagram("rat","car");
  
  // Expect: true, false, true, false
  console.log(testCase1,testCase2,testCase3,testCase4);