
// varはブロックスコープを飛び越える
if (true) {
  var x = 1;
}
console.log('var x = ', x);
// var x =  1

// letはブロックスコープを飛び越えない
if (true) {
  let y = 1;
}
console.log('let y = ', y);
// ReferenceError: y is not defined
