const _ = require('lodash');

let arry = ['January', 'February', 'March', 'April',' May', 'June',' July', 'August', 'September', 'October', 'November', 'December' ]
let chunk = _.chunk((arry),4)

let oddNum = [1,3,5,7,9,11,13,15,17,19]
let tail = _.tail(oddNum)

let repeatNum = [1,2,3,4,5,6,7,8,9]
let repeat = [3,4,5,6,7,8,9]
let num = [5,6,7,8,9]
let numRepeat = [1,3,5,7,9]
let repeatNumber = [2,4,6,8]

let union = _.union(repeatNum, repeat, num,numRepeat, repeatNumber)

let keyValue = [["horror","The Shining"],["darama","Titanic"],["thriller","shutter"],["fantasy","pans labyrinth"]]
let fromPairs = _.fromPairs(keyValue)


module.exports.chunk = chunk
module.exports.tail = tail
module.exports.union = union
module.exports.fromPairs = fromPairs

