//Can be optimized - I just don't feel like it rn.
public String withoutString(String base, String remove) {
  //Step through base with a window size of remove.length().
  //If this range is equal to remove, do not append the next character, and move the monitor forward.
  //else, append the next character.
  String without = "";
  int remLen = remove.length();
  String remLower = remove.toLowerCase();

  for (int i = 0; i < base.length(); i++){
    if (i + remLen > base.length()){
      without = without + base.charAt(i);
    }
    else if (base.substring(i, i + remLen).toLowerCase().equals(remLower)){
      i += remLen - 1;
    }
    else
    {
      without = without + base.charAt(i);
    }
  }
  return without;
}
