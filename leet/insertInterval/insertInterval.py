#suboptimal, 97% solution.  Needs cleanup
#Preformed as a whiteboarding question.  Took too long.

#Should take more advantage of the fact that intervals are disjoint and sorted - use bisect instead for next one.

# Definition for an interval.
# class Interval(object):
#     def __init__(self, s=0, e=0):
#         self.start = s
#         self.end = e

class Solution(object):
    def overlap(self, i1, i2):
        if (i2.start <= i1.start and i2.end >= i1.start) or (i2.start <= i1.end and i2.end >= i1.end) or (i2.start >= i1.start and i2.start <= i1.end):
            return True
        return False

    def insert(self, A, newInterval):

        if not A:
            return [newInterval]
        #1. find the minimum overlapping interval.  note that existing intervals are disjoint and non-overlapping.
        #2. once found, store this interval as the one to modify.  Look for the last overlapping interval.
        #3. the first overlapping interval will become min(lowint.start, newInt.start), max(highint.end, newInt.end).  All intermediary intervals will be deleted, as they overlap with newInterval.
        #4. intervals after high interval are appended to the end of the list.
        #Note: if no overlapping interval is found, newinterval goes either at the beginning or the end of the list.
        #We can do this faster if we make use of the fact that it's sorted, and do a binary search with something like bisect.bisectleft

        found = False
        for i in range(len(A)):
            if self.overlap(A[i], newInterval):
                A[i].start = min(A[i].start, newInterval.start)
                found = True
                break

        if found:
            found = False
            for j in range(len(A) - 1, i-1, -1):
                if self.overlap(A[j], newInterval):
                    A[i].end = max(A[j].end, newInterval.end)
                    found = True
                    break

            if found:
                return A[:i+1] + A[j+1:]
            A[i].end = max(A[i].end, newInterval.end)
            return A
        else: #no overlap in start, so we just insert this value somewhere.
            inserted = False
            for i in range(len(A)):
                if newInterval.start < A[i].start:
                    A.insert(i, newInterval)
                    inserted = True
                    break
            if not inserted:
                A.append(newInterval)
            return A

        #structure is intervals[:lowInterval] + intervals[highInterval + 1:]
