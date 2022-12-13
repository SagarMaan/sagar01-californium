
//  Q2. 
   // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
 // Your route code will look like this

		//    let arr= [33, 34, 35, 37, 38]
		//   find  missingNumbe : 36
 
const missingNum = function ( req , res){ 

   let arr= [33, 34, 35, 37, 38]
   let sum = 0
   for (i=0; i<arr.length; i++){
	sum += arr[i]
   }
   let sumN = 0
   for (i=33; i<=38; i++){
	sumN += i
   }
   let diff = sumN - sum

   res.send(`Missing number is ${diff}`)
}
   
module.exports.missingNum = missingNum