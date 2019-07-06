# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def sufficientSubset(self, root: TreeNode, limit: int) -> TreeNode:
        #if the sum of a branch is less than some value 'limit', remove nodes until we reach a node such that our sum of this branch is greater than 'limit'.
        #if this never occurs on this branch, delete the branch until we reach a node that has some branch that totals to at least limit.
        
        #'delete all simultaneously' - question wants us to keep a list of nodes to be deleted, then remove them all at the end.
        
        
        #as we proceed down the tree, maintain a sum until we reach a leaf node, then check for sufficiency on the way back up, IF the child node was insufficient to begin with.
        
        #if it wasn't insufficient to begin with we dont care.
        
        #check a parent node for sufficiency.
        #we will return True on this node if it is sufficient, but only after checking all of its children.
        #we cannot make this determination until all children have been checked.
        
        #only one value must be sufficient for this one to be, if it meets the limit itself.
        
        def isSufficient(nd, parentSum):
            if nd:
                leftSufficient = isSufficient(nd.left, parentSum + nd.val)
                rightSufficient = isSufficient(nd.right, parentSum + nd.val)
                if leftSufficient and rightSufficient:
                    #if both children are sufficient we can just ignore and proceed.
                    return True
                else:
                    if not leftSufficient and not rightSufficient:
                        if not nd.left and not nd.right:
                            if nd.val + parentSum >= limit:
                                return True
                        return False
                    
                    if not leftSufficient: #then right is sufficient
                        nd.left = None
                    if not rightSufficient: #then left is sufficient
                        nd.right = None
                        
                    return True
            else:
                return False #a blank node is sufficient.
            
        
        leftSufficient = isSufficient(root.left, root.val)
        rightSufficient = isSufficient(root.right, root.val)
        
        
        if leftSufficient and rightSufficient:
            return root
        
        else:
            #if neither is sufficient then this value is insufficient.
            if not leftSufficient and not rightSufficient:
                if not root.left and not root.right:
                    if root.val >= limit:
                        return root
                return []
            
            if not leftSufficient:
                root.left = None
            if not rightSufficient:
                root.right = None
            
                #no, the root is not sufficient.
            
            
            return root