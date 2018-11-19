public boolean canBalance(int[] nums) {
  //This (on codingbat) has an incomplete set of test cases.  I had an incorrect answer and it passed it.
  //This should work in general.
  int listSum = 0;
  int halfSum = 0;
  int hIdx = 0;

  for (int i = 0; i < nums.length; i++){
    listSum += nums[i];

    //if our smaller sum is less than the current sum over 2, we can advance it by one index.
    if (halfSum < listSum / 2){
      halfSum += nums[hIdx];
      hIdx += 1;
    }
  }

  while (halfSum < listSum / 2){
    halfSum += nums[hIdx];
    hIdx++;
  }

  if (listSum / 2 == listSum / 2.0 && listSum / 2.0 == halfSum){
    return true;
  }
  return false;
}
