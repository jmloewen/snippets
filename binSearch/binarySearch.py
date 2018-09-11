class Solution:
    def iterBinSearch(self, A, target):
        if not A:
            return -1
        low, high = 0, len(A) - 1

        while low <= high:
            mid=(low+high)//2
            if A[mid] == target:
                return mid

            elif A[mid] < target:
                low = mid+1
            else:
                #A[mid] > target
                high=mid-1
        return -1

    def binarySearch(self, A, target):
        if not A:
            return -1
        if len(A) <= 1:
            if not A:
                return -1
            elif A[0] == target:
                return 0
            return -1

        c = len(A) // 2

        if target == A[c]:
            return c
        elif target > A[c]:
            rec = self.binarySearch(A[c:], target)
            if rec > -1:
                return c + rec
        else:
            rec = self.binarySearch(A[:c], target)
            if rec > -1:
                return rec
        return -1
