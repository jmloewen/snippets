# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
#A 100% solution.  Note that this only works on BST with Integer nodes.
class Solution(object):
    #Assuming that BST is made of integers
    def closestValue(self, root, target):
        """
        :type root: TreeNode
        :type target: float
        :rtype: int
        """
        nd = root
        closest = root.val
        while nd:
            if abs(nd.val - target) < abs(closest - target):
                closest = nd.val

            if abs(nd.val - target) < 0.5:
                return nd.val
            elif nd.val > target:
                if nd.left:
                    nd = nd.left
                else:
                    return closest
            else:
                if nd.right:
                    nd = nd.right
                else:
                    return closest
        return closest
