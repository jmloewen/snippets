#For Leetcode Weekly 111.  An O(N) solution.
class Solution(object):
    def diStringMatch(self, S):
        #max value is len(S)
        #if we see an I, we must increase in value between this value and the next.
        #if we see a D, we must decrease in value between this and the next.
        #Observations:
        #maximum value len(S) should be before the first decrease
        #minimum value 0 must be before the first increase.
        #next

        #Suppose we have length 0.  we can only put in '0'
        #length 1: can be I or D.  if I, we must go 0, 1.  if D, we must go 1, 0.
        #length 2: II, DD, ID, DI.
        #II: 0,1,2
        #DD: 2,1,0
        #ID: 0,2,1
        #DI: 2,0,1
        #length 3:  III, IID, IDI, IDD
        #           DDD, DDI, DID, DII
        #0,1,2,3, 0,1,3,2/0,2,3,1, 0,3,1,2/0,2,1,3, 0,3,2,1
        #3,2,1,0, 3,2,0,1, 3,0,2,1, 3,0,1,2
        #obs: there are multiple possible combinations for some.
        #always want to take the smallest number on finding i's.
        #if we go through the string and have only i's to some point k, we can just go 0,1,2,3,...k-1
        #then, if the kth is a D, we can increase all values prior to k, and then make K go down to 0, making the preceding list something like 1,2,3,...k,0.
        #then, if the k+1th is a D, we can do this again, making the list 2,3,4,....k+1,1,0
        #if we have to increase after this, we can simply ascend to the next unused value.

        if len(S) == 1:
            if S[0] == "I":
                return [0,1]
            else:
                return [1,0]

        vals = []
        if S[0] == "I":
            vals = [0,1]
        else: #it's "D".
            vals = [1,0]

        maxVal = 1
        minVal = 0

        for i in range(1, len(S)):
            if S[i] == "I":
                maxVal += 1
                vals.append(maxVal)
            else:
                minVal -= 1
                vals.append(minVal)
        for i in range(len(vals)):
            vals[i] += abs(minVal)
        return vals

        """
        :type S: str
        :rtype: List[int]
        """
