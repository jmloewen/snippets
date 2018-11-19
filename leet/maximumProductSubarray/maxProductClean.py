class Solution(object):
    def maxProduct(self, nums):

        lists = []
        prevZero = -1
        negs = 0
        curMax = nums[0]

        if len(nums) <= 2:
            if len(nums) == 0:
                return 0
            elif len(nums) == 1:
                return nums[0]
            elif len(nums) == 2:
                return max(nums[0], nums[1], nums[0] * nums[1])

        for i in range(len(nums) + 1):
            #we don't want 0's.
            if i == len(nums) or nums[i] == 0:
                newList = nums[prevZero + 1:i]
                newList.insert(0, negs)
                lists.append(newList)
                prevZero = i
                negs = 0
                if i < len(nums):
                    curMax = max(curMax, nums[i])
            elif nums[i] < 0:
                negs += 1

        #we now have the number of negatives at the front of the list.
        #get prod of each list.
        for l in lists:
            #l is some list of contiguous values.
            negs = l.pop(0)

            if negs % 2 == 0:
                if len(l) > 0:
                    prod = l[0]
                    for i in range(1, len(l)):
                        prod *= l[i]
                    curMax = max(curMax, prod)
            else:
                #two lists to compare.  including area before first neg but not last area, and the opposite.
                n1 = n2 = None

                #n1/n2 are flags to indicate that we have found the first and last negatives in the list.
                p1 = p2 = None

                #finds first negative
                for i in range(0, len(l)):
                    if n2 is None:
                        if l[i] < 0:
                            n2 = i#assign n2
                    else:
                        #We're now in the p2 area.
                        if p2 is None:
                            p2 = l[i]
                        else:
                            p2 *= l[i]

                #finds last negative
                for i in range(len(l)-1, -1, -1):
                    if n1 is None:
                        if l[i] < 0:
                            n1 = i
                    else:
                        if p1 is None:
                            p1 = l[i]
                        else:
                            p1 *= l[i]

                curMax = max(curMax, p1, p2)
        return curMax
