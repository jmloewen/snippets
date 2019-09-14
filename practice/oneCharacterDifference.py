'''
Using one of the languages from {Go, Python, Java, C++},
implement a function/method that is given two strings and returns whether one can be obtained by the other after removing exactly one character. 
'''
#started at roughly 12:20 Saturday
#note that the exact requirement is `one can be obtained by removing a character from another`.  Editing is not valid.
#Note that x and y can be quite long (each containing millions of characters).
#Note Case Sensitivity
#Assume that both strings only contain English alphabets and that neither is an empty string.
def equalsWhenOneCharRemoved(x, y):
    short = long = None
    s = l = 0
    
    if len(x) == len(y) + 1:
        short = y
        long = x
    elif len(y) == len(x) + 1:
        short = x
        long = y
    else:
        return False

    #search for the extra character and remove it when we find it.
    foundDiff = False
    while s < len(long) - 1:
        if short[s] != long[l]:
            #values are not equal, so an Extra character has been located.  Skip it.
            long = long[:l] + long[l+1:]
            foundDiff == True
            break
        s += 1
        l += 1
        
    #If the strings are now equal, or if the last character would be the difference:
    if short == long and foundDiff or short == long[:len(long) - 1] and not foundDiff:
        return True
    return False
    
print("True Cases")

print(equalsWhenOneCharRemoved("abcd", "abxcd"))
print(equalsWhenOneCharRemoved("xyz", "xz"))
print(equalsWhenOneCharRemoved("ca", "cba"))
print(equalsWhenOneCharRemoved("cba", "ca"))
print(equalsWhenOneCharRemoved("abc", "abcd"))
print(equalsWhenOneCharRemoved("abcd", "abc"))
print(equalsWhenOneCharRemoved("a", "ba"))
print(equalsWhenOneCharRemoved("ba", "a"))
print(equalsWhenOneCharRemoved("bb", "b"))
print(equalsWhenOneCharRemoved("b", "bb"))
print(equalsWhenOneCharRemoved("abb", "bb"))
print(equalsWhenOneCharRemoved("abc", "acbc"))

print("False Cases")
print(equalsWhenOneCharRemoved("x", "y"))
print(equalsWhenOneCharRemoved("x", "XX"))
print(equalsWhenOneCharRemoved("yy", "yx"))
print(equalsWhenOneCharRemoved("b", "b"))
print(equalsWhenOneCharRemoved("bbb", "b"))
print(equalsWhenOneCharRemoved("bab", "a"))
print(equalsWhenOneCharRemoved("ab", "bb"))
print(equalsWhenOneCharRemoved("abc", "bcbc"))