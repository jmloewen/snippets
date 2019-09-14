"""
# Definition for a Node.
class Node:
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""
class Solution:
    def preorder(self, root: 'Node') -> List[int]:
        
        s = []
        
        def helper(root):
            s.append(root.val)
            
            for i in range(len(root.children)):
                helper(root.children[i])
            
                
        
        if root:
            helper(root)
        return s