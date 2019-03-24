# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    
    def mergeTrees(self, t1, t2):
        """
        :type t1: TreeNode
        :type t2: TreeNode
        :rtype: TreeNode
        """
        head = t1
        
        if t1:
            if t2:
                t1.val += t2.val
            else:
                return t1
            
            if t1.left:
                self.mergeTrees(t1.left, t2.left)
            else:
                t1.left = t2.left
            
            if t1.right:
                self.mergeTrees(t1.right, t2.right)
            else:
                t1.right = t2.right
        
            return head
        else:
            return t2
            