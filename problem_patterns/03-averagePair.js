// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:
// Time: O(N)
// Space: O(1)


// function averagePair(arr, targetAvg) {

//   if (arr.length === 0) return false

//   let avgComplement = new Set()
//   let targetJ

//   for (let i = 0; i < arr.length; i++) {
//     targetJ = (targetAvg * 2) - arr[i]
//     if (avgComplement.has(arr[i])) {
//       return true
//     } else {
//       avgComplement.add(targetJ)
//     }
//   }
//   return false
// }

function averagePair(arr, targetAvg) {

  if (arr.length < 2) return false

  let targetJ
  let j = 1
  for (let i = 0; i < arr.length; i++) {
    targetJ = (targetAvg * 2) - arr[i]
    while(arr[j] <= targetJ) {
      if (arr[j] === targetJ) {
        return true
      }
      j++
    }
    j = i + 1
  }

  return false
}

console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([],4)) // false
