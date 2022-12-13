// Note: The below questions are very commonly asked in nodejs interviews 

//  Q1.
   // -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing......
  

 const missingNumber = function ( req , res){

 let arr = [1,2,3,5,6,7]
let sum = 0
for ( i=0 ; i<arr.length; i++){
  sum += arr[i]
}
let sumN = 0
for (i=0; i<=7; i++){
sumN += i
}
let diff = sumN - sum

res.send(`Missing number is ${diff}`)
}

module.exports.missingNumber = missingNumber