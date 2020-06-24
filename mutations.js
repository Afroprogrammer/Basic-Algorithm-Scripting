function mutation(arr) {
  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase();

  for (let letter of secondWord){
    if(firstWord.indexOf(letter)=== -1){
      return false;
    }
  }return true;
}

mutation(["hello", "hey"]);
