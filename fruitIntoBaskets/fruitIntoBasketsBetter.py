#credit to some guy on leetcode

class Solution:
    def totalFruit(self, tree):
        #This is the same as maximal substring with at most 2 distinct characters.

        if len(tree) < 3:
            return len(tree)

        #More Optimal:
        curMax = 2
        start = left = right = 0

        #Basically updates as soon as we've seen a third value, and adjusts our pointers accordingly.
        for i in range(len(tree)):
            if tree[i] == tree[right]:
                continue
            #tree[i] != tree[right], but its equal to left.  still only 2 values. we update left and right to be the unique values.
            elif tree[i] == tree[left]:
                left = right
                right = i
            #It's not equal to either left or right, so we have to update.
            else:
                #update max
                if i - start > curMax:
                    curMax = i-start
                #new starting point of our range is now the right value.  so is left.  right is now i.
                start = right
                left = right
                right = i

        return max(curMax, len(tree) - start)
