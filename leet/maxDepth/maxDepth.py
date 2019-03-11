#this is a bad recursive implementation that fills the callstack with garbage

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def traverseLevel(self, root, level):
        if not root:
            return level - 1
        
        return max(self.traverseLevel(root.left, level + 1), self.traverseLevel(root.right, level+1))
        """
        :type root: TreeNode
        :rtype: int
        """
        
    def maxDepth(self, root):
        if not root:
            return 0
        
        return max(self.traverseLevel(root.left, 2), self.traverseLevel(root.right, 2))
        
    