# Definition for a  binary tree node
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


#want the ability to get 'next' to get the next smallest in constant time, and 'hasNext' to see if the next element exists.


class BSTIterator(object):
    def __init__(self, root):
        #stack:
        
        self.s = []
        
        while root:
            self.s.append(root)
            root = root.left
        """
        :type root: TreeNode
        """
        

    def hasNext(self):
        if self.s:
            return True
        return False
        """
        :rtype: bool
        """
        

    def next(self):
        #next will be the leftmost value of the first right child of the last value in the stack.
        #if no such value exists, then this stack value is the next and must be removed from stack.
        
        nextNode = self.s[-1]
        #nextNode is the next node to be returned.
        #add values to the stack if there are more nodes to be later returned.
        #remove this value from the stack.  we no longer need it.
        cur = self.s.pop()
        #If there is a value on the right, we need to add all of its left children to the stack, as they are next.
        if cur.right:
            nd = cur.right
            
            #while there are children to find, do so.
            while nd:
                self.s.append(nd)
                nd = nd.left
        return nextNode.val
            
        """
        :rtype: int
        """
        

# Your BSTIterator will be called like this:
# i, v = BSTIterator(root), []
# while i.hasNext(): v.append(i.next())