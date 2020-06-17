function truncateString(str, num) {
  var ending = '...'
  if(str.length > num){
    return str.substring(0,num) + ending
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
