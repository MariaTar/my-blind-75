// Write a function that takes the binary representation of an unsigned integer
// and returns the number of '1' bits it has (also known as the Hamming weight).
// Return Type = int
// Type of "n" = int
const number_of_bits = (n) => {
    const binaryString = n.toString(2)
    return binaryString.replace(/0/g,'').length
};
