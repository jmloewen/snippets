#theres definite improvements to be made, but im satisfied with this.

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        
        t = [[]]
        
        def helper(nd, level=0):
            if not t[level]:
                t.append([])
            
            t[level].append(nd.val)
            
            if nd.left:
                helper(nd.left, level + 1)
            if nd.right:
                helper(nd.right, level + 1)
            
        if root:
            helper(root)
        else:
            return []
        
        if len(t[-1]) == 0: #remove trailing empty lists
            t.pop()
        return t