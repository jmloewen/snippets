#quick leetcode question on a tuesday night
#only a 35% solution, but it's also only two passes.  Can be better on space as well.
class Solution:
    def getHint(self, secret, guess):
        
        #lengths are always equal and only contain digits
        #_A_B -
        #1123 - 0111 = 1A1B, _1__ is A, __1 or ___1 is B.  both match but only one 1 can fit in.
        
        #first, do one scan to find values that are in the right positions.
        
        #then, ignoring those values that are in the right positions, check for values that are otherwise in the array.
        
        #O(2N)
        
        bulls = 0
        cows = 0
        numArr = [0] * 10
        
        i=0
        while i < len(secret):
            if secret[i] == guess[i]:
                bulls += 1
                secret = secret[:i] + secret[i+1:]
                guess = guess[:i] + guess[i+1:]
            else:
                numArr[int(secret[i])] += 1
                i += 1
        i=0
        while i < len(guess):
            if numArr[int(guess[i])] > 0:
                numArr[int(guess[i])] -= 1
                cows += 1
            i += 1
        
        return str(bulls) + "A" + str(cows) + "B"
        
                
        
        """
        :type secret: str
        :type guess: str
        :rtype: str
        """
