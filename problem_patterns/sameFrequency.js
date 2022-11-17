// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)

function sameFrequency(int1, int2) {
  let digitCounter = {}

  if (int1.length !== int2.length) return false

  for (let digit of int1.toString()) {
    digitCounter.hasOwnProperty(digit) ? digitCounter[digit]++ : digitCounter[digit] = 1
  }

  for (let digit of int2.toString()) {
    if (digitCounter[digit]) {
      digitCounter[digit]--
    } else {
      return false
    }
  }
  return true
}


console.log(sameFrequency(182,281))// true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false