
function getIndexToIns(arr, num) {
  var x = 0;
  for (var elem of arr){
    if(num>elem) x++;
  }
  return x;
}
console.log(getIndexToIns([5, 3, 20, 3], 5));
