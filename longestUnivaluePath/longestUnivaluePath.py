# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def inOrder(self, root):
        #Given a node, find its leftmost child.
        #If this is the leftmost child, do _____ with it
        #After doing thing, check if it has a right child, then left again (aka inorder)
        #head back up the tree once branch is done, repeat.
        
        
        leftCount = None
        rightCount = None
        count = 0 #We're counting matching numbers on paths, so if all values are unique, answer is 0.
        curMax = 0
        junction = False
        leftJunction = False
        rightJunction = False
        maxLeft = 0
        maxRight = 0

        #Check Left.
        #If there's a left node, get the count from it.
        if root.left:
            leftCount, maxLeft, leftJunction = self.inOrder(root.left)
            
        #print("this:" , root.val)
        #Check Right.
        #If there's a right node, get its counts.
        if root.right:
            rightCount, maxRight, rightJunction = self.inOrder(root.right)
            
        
        if leftCount is not None:
            if rightCount is not None:
                if root.left.val == root.val and root.right.val == root.val:
                    count = max(leftCount, rightCount) + 1
                    #Denote that we have a junction to factor in for our max calculation later.
                    junction = True
                
                #Equal to just right?.
                elif root.val == root.right.val:
                    count = rightCount + 1
                #Equal to just left?
                elif root.val == root.left.val:
                    count = leftCount + 1
                else:
                    #No match.
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
        
        return count, curMax, junction
        
        
        
    
    def longestUnivaluePath(self, root):
        #Thoughts?
        #Start at root, proceed Left / Right until we find the value.
        #Create a list of lists, each interior list is a count of # of times 
        """
        :type root: TreeNode
        :rtype: int
        """
        
        if root:
            ct, maxCount, jnc = self.inOrder(root)
            print("Count:, ", ct, "Junction: ", jnc)
            return maxCount
        return 0
        #Given preorder traversal.
        #preform inorder traversal?  Approach from left branch, heading upwards, then to the right?
            #Record number-in-a-row on number we reach, in an array.
            #Return max of array at end, done.  O(n).
            
        #Note that it is a Path, counting # of edges.  Meaning that the given example with six 5's gives an answer of 4.