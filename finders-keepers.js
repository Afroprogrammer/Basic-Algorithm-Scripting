function findElement(arr, func) {
  let num = 0;
  for( var i = 0; i < arr.length; i++){
  let num = arr[i];
  if(func(num)){
  return num;
  }
  }
   return undefined;
}