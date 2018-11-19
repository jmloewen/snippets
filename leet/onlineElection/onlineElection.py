#This was somehow a >100% solution - a new high score.  I don't know how this achieved it though - this feels like it should be a standard implementation 
from collections import defaultdict
class TopVotedCandidate(object):

    def __init__(self, persons, times):
        voteCount = defaultdict(lambda:0)

        self.leader = [0] * len(times)
        self.times = times
        voteCount[persons[0]] += 1
        curMax = 1
        self.leader[0] = persons[0]

        for i in range(1, len(persons)):
            voteCount[persons[i]] += 1

            #If the votecount is more than the max, we have a potential new leader.
            if voteCount[persons[i]] > curMax:
                #persons[i] is now the leader.
                curMax += 1
                self.leader[i] = persons[i]
            elif voteCount[persons[i]] == curMax:
                self.leader[i] = persons[i]
            else:
                self.leader[i] = self.leader[i-1]
    '''
    #builtin binsearch is better than this, unfortunately.
    def binSearchNextLowerValue(self, A, t):
        #A is guaranteed to be in ascending order.
        #This value is the centre value + 1 - unless our length is 1, there is always some value 1 beneath this.
        #base
        if len(A) == 1:
            return 0

        ctr = len(A) / 2

        idx = 0

        #We've found our target.  Return the index where this is.
        if A[ctr] == t:
            #return this index
            return ctr
        elif A[ctr-1] == t:
            return ctr-1

        #if A[ctr] is less than the target, we want to search the top half of the list.
        elif A[ctr] < t:
            idx = ctr + self.binSearchNextLowerValue(A[ctr:], t)
        else:
            idx = self.binSearchNextLowerValue(A[:ctr], t)
        return idx

    '''
    def q(self, t):
        num = bisect.bisect_right(self.times, t)
        return self.leader[num - 1]
        '''
        if t < self.times[0]:
            return -1
        elif t >= self.times[-1]:
            return self.leader[-1]
        return self.leader[self.binSearchNextLowerValue(self.times, t)]
        '''
