class Solution(object):
    def repeatedStringMatch(self, A, B):
        #If not a subset now, it can never be.
        if not set(B).issubset(set(A)):
            return -1

        #Take Ceiling of B/A, and make a copied A string of this length.
        ctr = int(math.ceil(len(B) / len(A)))
        lA = A * ctr

        #Check for this amount, then this amount + 1.  If it fits either, return, otherwise it's -1.
        #lA is now >= B
        if B in lA:
            return ctr

        #Iterate A and counter to expand to a maximum length that B could fit in. If it fits, ctr, else -1
        lA += A
        ctr += 1
        if B in lA:
            return ctr
        return -1
