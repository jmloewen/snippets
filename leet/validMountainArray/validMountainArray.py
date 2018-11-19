#for leetcode contest #111.  needs optimization, but it works for the purposes of the contest.
class Solution(object):
    def validMountainArray(self, A):
        if len(A) <= 2:
            return False
        goingUp = True

        for i in range(1, len(A)):
            if goingUp:
                if A[i] > A[i-1]:
                    continue
                else:
                    if i == 1:
                        return False
                    else:
                        if A[i] < A[i-1]:
                            goingUp = False
                            continue
                        else:
                            return False
            else:
                if A[i] < A[i-1]:
                    continue
                else:
                    return False

        if goingUp:
            return False
        return True
        """
        :type A: List[int]
        :rtype: bool
        """
