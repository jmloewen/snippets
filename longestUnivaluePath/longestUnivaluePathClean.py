#A 93% solution.
class Solution(object):
    def inOrder(self, root):
        leftCount = None
        rightCount = None
        count = 0 #We're counting matching numbers on paths, so if all values are unique, answer is 0.
        curMax = 0
        junction = False
        maxLeft = 0
        maxRight = 0

        if root.left:
            leftCount, maxLeft = self.inOrder(root.left)

        if root.right:
            rightCount, maxRight = self.inOrder(root.right)


        if leftCount is not None:
            if rightCount is not None:
                if root.left.val == root.val and root.right.val == root.val:
                    count = max(leftCount, rightCount) + 1
                    #Denote that we have a junction to factor in for our max calculation later.
                    junction = True

                elif root.val == root.right.val:
                    count = rightCount + 1
                elif root.val == root.left.val:
                    count = leftCount + 1
                else:
                    count = 0
            else:
                if root.val == root.left.val:
                    count = leftCount + 1
                else:
                    count = 0
        elif rightCount is not None:
            if root.val == root.right.val:
                count = rightCount + 1
            else:
                count = 0
        else:
            count = 0

        if junction:
            curMax = max(maxLeft, maxRight, leftCount + rightCount + 2)
        else:
            curMax = max(maxLeft, maxRight, count)

        return count, curMax

    def longestUnivaluePath(self, root):

        if root:
            _, maxCount = self.inOrder(root)
            return maxCount
        return 0
