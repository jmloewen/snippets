#This trimmed version is somehow much slower than the unoptimized version.
from collections import defaultdict
class TopVotedCandidate(object):

    def __init__(self, persons, times):
        voteCount = defaultdict(lambda:0)

        self.leader = [persons[0]] * len(times)
        self.times = times
        voteCount[persons[0]] += 1
        curMax = 1

        for i in range(1, len(persons)):
            voteCount[persons[i]] += 1

            #If the votecount is more than the max, we have a potential new leader.
            if voteCount[persons[i]] >= curMax:
                curMax = voteCount[persons[i]]
                self.leader[i] = persons[i]
            else:
                self.leader[i] = self.leader[i-1]

    def q(self, t):
        return self.leader[bisect.bisect_right(self.times, t) - 1]
