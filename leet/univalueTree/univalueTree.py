# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isUnivalTree(self, root: TreeNode) -> bool:
        
        s = []
        val = root.val
        
        def helper(root):
            if root.val != val:
                s.append(1)
                return False
        
            if root.left:
                helper(root.left)
            if root.right:
                helper(root.right)
                
            
            
        if root:
            helper(root)
        
        if s:
            return False
        return True