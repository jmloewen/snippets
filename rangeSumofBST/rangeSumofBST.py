#weekly contest 110
#an easy an somewhat inefficient solution, but it's still O(N)
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def rangeSumBST(self, root, L, R):
        numStorage = set()
        #easy but slow:
        #traverse and store values in array if between L and R, then add them up.  ez.
        def traverse(root):
            numStorage.add(root.val)

            if root.left:
                traverse(root.left)
            if root.right:
                traverse(root.right)
        traverse(root)
        total = 0


        for num in numStorage:
            if num >= L and num <= R:
                total += num
        return total
