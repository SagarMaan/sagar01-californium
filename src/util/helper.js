const a = new Date()
const u = new Date()

function printdate() {
const j = u.getMonth();
const b = a.getDate();
console.log( " current  date is ",b," month is ",j+1);
}
printdate()

module.exports.printdate = printdate