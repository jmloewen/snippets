# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def inorderSuccessor(self, root, p):
        #Definitions:
        #Inorder of a left node with one right child is that node's leftmost child, or the right node if no child exists.
        #Inorder of a left node with no right child is its parent.  Same with left leaf.
        #Inorder of a right node is its right child's leftmost child - else, it is this right node.
        #Inorder of a right node with no right child is None.
        #Inorder of a root is its right child's leftmost child.
        
        #Summarized:
        #Inorder of any node with a right child:
            #1. is this right child's leftmost child, if it exists.  Otherwise:
            #2. The right child itself
        #Inorder of a node without a right child:
            #3. If this node is a left child, successor is its parent.
            #If this node is a right child, successor is the parent of the first node up the tree that is itself a left child.  This is the hard part of this question.
                #If no such parent exists (aka, this is the last value in the array), the successor is none.
        #Track the last node that we traversed to the left from.
        
        cpP = p
        
        if cpP.right:
            cpP = cpP.right
            while cpP.left:
                cpP = cpP.left
            return cpP.val
        
        lastLeftParent = None
        
        #find p by descending the tree.
        while root != p:
            if root.val < p.val:
                root = root.right
            else:
                lastLeftParent = root
                root = root.left
        
        if lastLeftParent:
            return lastLeftParent.val
        return None