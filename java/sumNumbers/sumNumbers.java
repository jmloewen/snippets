public int sumNumbers(String str) {
  int sum = 0;
  boolean inNum = false;
  String curNum = "";

  for (int i = 0; i < str.length(); i++){
    if (Character.isDigit(str.charAt(i))){
      inNum = true;
      curNum += str.charAt(i);
    }
    else{
      if (inNum){
        inNum = false;
        sum += Integer.parseInt(curNum);
        curNum = "";
      }
    }
  }
  if (inNum){
    sum += Integer.parseInt(curNum);
  }

  return sum;

}
