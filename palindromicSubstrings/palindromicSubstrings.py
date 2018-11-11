#This is not done in DP fashion - simply in an N^2 fashion.  sad.  A very slow solution.
class Solution(object):
    def countSubstrings(self, S):
        #each character is some substring that is palindromic with itself.
        #ie - there are always len(S) substrings.  Anything else is bonus on top.
        #in addition, there is a potential palindrome for every generated substring previous to the kth value.
        #ex: if 'abc' is a prefix to some greater string of length 6 or more, 'a', 'b', 'c', 'ab', 'bc', and 'abc' are all candidates for being palindromes.
            #'ab' is disqualified as a palindrome as soon as 'c' is seen - since the only way to make 'ab' a palindrome is for this character to be 'b' or 'a'.
        """
        :type s: str
        :rtype: int
        """

        #for something to be a palindrome:
            #If even, it needs to be mirrored down the centre.
            #if odd, it needs to be mirrored down the (centre + 1) with some arbitrary single character in the center.
                #or, it needs to be a single character.
        #Imagine a 2D DP table, with 'word' on both the x and y axis.  where we use characters on the X as a starting point, ending at the position of characters on the Y, marking T if this creates a palindrome.  See:
        #  tacocat
        #t T------
        #a FT-----
        #c FFT----
        #o FFFT---
        #c FFTFT--
        #a FTFFFT-
        #t TFFFFFT
        #this produces len(word) = 7, plus 3 extra palindromes, = 10 in this case.
        #The traversal as outlined above is an O(N^2) runtime.

        S = S.lower()


        ctr = 0

        for i in range(len(S)):
            for j in range(i, len(S)):
                #if there is some palindrome from [i] to [j], mark True at [i][j]

                seg = S[i:j+1] #this is our word segment.

                if len(seg) % 2 == 0:
                    #even length word
                    #divide it in half

                    front = seg[:len(seg) / 2]
                    rear = seg[len(seg) / 2:]
                    rear = rear[::-1]
                    if front == rear:
                        ctr += 1

                else:
                    front = seg[:len(seg) / 2]
                    rear = seg[(len(seg) / 2) + 1:]
                    rear = rear[::-1]
                    #odd length word
                    if front == rear:

                        ctr += 1
        return ctr

        
