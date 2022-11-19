// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(str1, str2) {

  let j = 0
  for (let i = 0; i < str2.length;) {

    if (i === str2.length - 1 && j < str1.length - 1) return false

    if (str1[j] === str2[i]) {
      i++
      j++
      if (j === str1.length - 1) return true
    } else {
      i++
    }
  }
}

console.log(isSubsequence('hello', 'hello world')) // true
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'abracadabra')) // true
console.log(isSubsequence('abc', 'acb')) // false (order matters)

//       j
// 'hello',
// 'hello world'
//       i

//   j
// 'abc',
// 'acb')
//    i