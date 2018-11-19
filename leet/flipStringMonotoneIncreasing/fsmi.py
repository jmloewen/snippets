class Solution:
    def minFlipsMonoIncr(self, S):
        #We are monotone increasing so long as all values Left to Right are equal or increasing.
        #Go through until we find a value that violates this.
        #Do some comparison to the total length
        #Then flip at most (length remaining / 2) remaining values (if all were 1's, and we had some 0 interspersed, we only need to flip 1.  )  If we had a 1 prior to a bunch o 0's, we could just flip that 1 to 0.  The worst case is that we have something like 0.......1010101010101 where we have to flip either a bunch of 0's or a bunch of 1's.


        #if 1's become 0's, we've not invalidated ANYTHING.
        #if 0's become 1's, we have invalidated all future 0's.

                #Starting over:
                #1. Find valid left zone.  Valid left zone consists of all contiguous 0's starting from the left boundary.
                #2. Find valid right zone.  Valid right zone consists of all contiguous 1's starting from the right boundary.
                #3. We now have some new zone of length N, consisting of N values: "1....0", surrounded by some "00000" and "1111"
                #4. Greedy:
                    #a. We now count the number of "non-conforming" contiguous values from the left - consisting of '1', until we hit the next '0'.
                    #b. Upon hitting this zero, we count the number of '0' values, until we hit the next '1'.
                    #c. Whichever of these values is less, the 0's or the 1's, is the group that is counted to be flipped.
                    #d. If we flipped the '1's to '0's, increment the counter with the number of values we would have flipped, and proceed to a.  Similarly if we flipped the '0's to '1's.  This is now a valid zone.
                    #e. Continue until N=0.  Return counter.

        #adapted from the discussion, post-contest.
        res = ones = 0

        for c in S:
            if c == "0":
                res = min(1 + res, ones)
            else:
                ones += 1
        return res

        
