class Solution(object):
    def maxProduct(self, nums):
        #This is a bit of a monstrosity, sorry.  Could easily be simplified down.  A 99.93% solution.
        #basic concept:
            #1. Split list into list of lists, divided when we hit 0's
                #This is done because a 0 cannot be included in any maximal product, unless all other products are less than 1, meaning there are negative values to either side of each 0.  This is covered by taking max on the split scan.
                #a. While splitting, count number of negatives in each segment, and append it to each list of lists.
                    #This takes O(N) time.
            #2. Iterate through each list of lists, containing some roughly 1.5N values.
                #a. If there is an even number of negatives in this list, multiply it through and track maximal value.
                #b. if there is an odd number of negatives in this list, take the product of list A - [:(last negative)] and list B - [(first negative)+1:].  Compare to running maximum to this point.
                    #This process runs through each value again once, an O(N) operation.
            #3. deal with off by one errors.
            #4. return max.  This is O(N) total.
            #Hooray!  We've avoided using a DP table.


        #can simply build a dp table in N^2 time.
        #theres a better way to do this by first dividing the list into areas with and without negatives.
        #array is made of integers.  0 and negatives are allowed.
        #idea: go through until encounter negative or 0.
            #store this as some curmax, then continue after the negative.
            #do some span between negatives, then including negatives
        #There are 3 cases that would cause us to stop multiplying.
            #Negatives, 0's, multiple negatives interspersed with 0's.



        #What if we first find zeroes, and split the list into sections based on 0's.
        #We now have some K lists, and need to find the maximum of K lists.
        #K lists can contain some amount each of J negative values.  With 1 negative, there are 2 candidate lists.  With 2, there is 1.  with 3, there are 2, with 4 there's 1, with 5 there are 2 - ie, with even negatives, there is only one possible list - multiplying all the way through.  With odd negatives, there are two possible lists - one including the first negative, and one including the last negative (as since there are no 0's, multiplying through a negative integer twice can only increase the value or retain the same number).

        #split our list into separate contiguous lists, not containing 0's.


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

        for i in range(len(nums)):
            #we don't want i's.
            if nums[i] == 0:
                newList = nums[prevZero + 1:i]
                newList.insert(0, negs)
                lists.append(newList)
                prevZero = i
                negs = 0
                curMax = max(curMax, nums[i])
            elif nums[i] < 0:
                negs += 1

        lastList = nums[prevZero + 1:]
        lastList.insert(0, negs)
        lists.append(lastList)

        #we now have the number of negatives at the front of the list.
        #get prod of each list.
        for l in lists:
            #l is some list of contiguous values.
            negs = l[0]

            if negs % 2 == 0:
                if len(l) > 1:
                    prod = l[1]
                    for i in range(2, len(l)):
                        prod *= l[i]
                    curMax = max(curMax, prod)
                else:
                    #if it's 0, curmax doesnt change.
                    pass
            else:
                #two lists to compare.  including area before first neg but not last area, and the opposite.
                n1 = n2 = -1

                #p1 / product1 goes from 1 (since l[0] demarks number of negative values) until (but not including) the last negative value.
                #p2 / product2 goes from the value after (not including) the first negative value, until the end of the list.
                #n1 is this last negative value that we want to stop before.
                #n2 is this first negative value that we want to start after.
                for i in range(1, len(l)):
                    if l[i] < 0:
                        n2 = i
                        break
                for i in range(len(l)-1, -1, -1):
                    if l[i] < 0:
                        n1 = i
                        break

                p1 = l[1]
                p2 = p1

                if len(l) > n2+1:
                    p2 = l[n2+1]

                    for i in range(n2 + 2, len(l)):
                        p2 *= l[i]

                for i in range(2, n1):
                    p1 *= l[i]
                curMax = max(curMax, p1, p2)
        return curMax
