#Separate list into evens, then odds.  Very easy.
class Solution(object):
    def sortArrayByParity(self, A):
        evens = []
        odds = []

        for a in A:
            if a % 2 == 0:
                evens.append(a)
            else:
                odds.append(a)
        return evens + odds
