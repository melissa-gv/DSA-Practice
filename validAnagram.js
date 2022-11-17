// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
function validAnagram(str1, str2){
  let freqCounterStr1 = {}

  if (str1.length !== str2.length) return false

  for (let char of str1) {
    freqCounterStr1.hasOwnProperty(char) ? freqCounterStr1[char]++ : freqCounterStr1[char] = 1
  }

  for (let char of str2) {
    if (freqCounterStr1[char] >= 1) {
      freqCounterStr1[char]--
    } else {
      return false
    }
  }

  return true
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true