#a 92% solution that gets slower when I clean it up and put things on fewer lines.
#could be done better and more space efficient but i'm practicing DP right now.  Bit Shifting would make this quicker.
class Solution(object):
    def countBits(self, num):
        #num=32:
        #0, 1, 1, 2,
        #1, 2, 2, 3,
        #1, 2, 2, 3, 2, 3, 3, 4,
        #1, 2, 2, 3, 2, 3, 3, 4, 3, 4, 4, 5, 4, 5, 5, 6
        #1

        #for first 2, we have 0 and 1.
        #next 2, we have the same as before, +1 on each (2 is a factor of 2^n), producing 1, 2
        #for next 4, we have the same values as before, +1 each.
        #for the next 8, the first 4 are the same as the previous 4 (4-8).  the next 4 are 1 additional to each value, until we hit 16, which is some 2^n.
        #for the next 16, the first 8 are the same as the previous 8, the next 8 are 1 + all values in the previous 8, some 2^n.

        #store first 4 values.
        oneList = [0, 1, 1, 2, 1, 2, 2, 3]
        if num < 8:
            return oneList[0:num+1]

        while len(oneList) <= num:
            #make the list larger until it's big enough, then truncate on return.
            cp = oneList[len(oneList)/2:]
            cpAdd = [x + 1 for x in cp]
            oneList = oneList + cp
            oneList = oneList + cpAdd

        return oneList[0:num+1]

        #want to demark powers of 2 - when we reach a power of 2, this value will be '1'.


        """
        :type num: int
        :rtype: List[int]
        """
