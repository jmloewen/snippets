#A 95% solution, O(N) + O(Zeroes)
class Solution(object):
    def findMaxConsecutiveOnes(self, nums):
        if not nums:
            return 0

        zList = []
        maxConsecutiveOnes = 1

        #Index all Zeroes
        #find maximum space between all indexes that are 2 apart.
        for i, num in enumerate(nums):
            if num == 0:
                zList.append(i)

        #If we found 1 or no zeroes, return the length of the list.
        if len(zList) <= 1:
            return len(nums)

        #Wrap our zeroes with a boundary.
        zList.insert(0, -1)
        zList.append(len(nums))

        #List of index locations of Zeroes.
        for i in range(1, len(zList)-1):
            maxConsecutiveOnes = max(maxConsecutiveOnes, zList[i+1] - zList[i-1] - 1)
        return maxConsecutiveOnes

    def findMaxConsecutiveOnesOnePass(self, nums):
            curZero = None
            prevZero = None

            if not nums:
                return 0

            maxConsecutiveOnes = 1

            for i in range(len(nums)):
                if nums[i] == 0:
                    if prevZero:
                        maxConsecutiveOnes = max(maxConsecutiveOnes, i-prevZero-1)
                    else:
                        #There is only one Zero encountered previously so far.
                        maxConsecutiveOnes = i


                    prevZero, curZero = curZero, i
            if prevZero is not None:
                return max(maxConsecutiveOnes, len(nums) - prevZero - 1)
            else:
                return len(nums)
