//using for loop

// function factorialize(num) {
//   for(var product = 1; num > 0; num--){
//   product *= num;
//   }
//   return product;
// }
// factorialize(5);

//using recursion;
function factorialize(num){
  if(num == 0){
    return 1;
  } return num * factorialize(num -1);
}
factorialize(5);