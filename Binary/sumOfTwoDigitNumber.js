// This function takes a two-digit integer and returns the sum of its digits.
// Return Type = int
// Type of "x" = int
const sum_digit_two = (x) => {
    const [a,b] = x.toString().split('');
    return parseInt(a) + parseInt(b)
};