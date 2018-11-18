#Does not get accepted to LC, too slow.
class Solution(object):
    def maxEnvelopes(self, envelopes):
        """
        :type envelopes: List[List[int]]
        :rtype: int
        """

        #suppose we sort the envelopes lowest to highest, stratified by length, and on width when tied.
        #length must strictly increase in order for this letter to fit, so we could take the smallest envelope and build up from there.
            #this does not work with the case, say, 1, 7, 2,,2, 3,3, 4,4, 5,5.  1,7 ends up as smallest and does not work in our favour.
            #what if we sort by smallest diagonal instead?  This should work - it's what we'd do in real life.
            #break ties by smallest minimum length or height.
            #will end up as an NLOGN algorithm.  Can probably do better with actual DP.


        if not envelopes:
            return 0
        #env = sorted(envelopes, key=lambda x: (float(x[0]**2 + x[1]**2)**0.5, min(x[0], x[1])))

        env = sorted(envelopes, key=lambda x: (x[0], x[1]))

        #longest common subsequence.
        #the way to do that is to keep track of how many previous values will have fit in this one.

        dp = [1] * len(env)

        #search for next i value using binsearch, proceed from there instead of

        for i in range(len(env) - 1):
            for j in range(i, len(env)):
                if env[j][0] > env[i][0] and env[j][1] > env[i][1]:
                    dp[j] = max(dp[j], dp[i] + 1)
        return max(dp)
        #can iterate through and see if envelopes fit in others.
        #from 0:
        #if this envelope can fit another inside of it,
