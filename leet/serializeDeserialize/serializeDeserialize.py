#a bad 11% solution.

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Codec:
    
    def pot(self, root):
        #traverse through array in order, adding to arr as we go.
        
        if root is None:
            return [None]
        
        left = self.pot(root.left)
        right = self.pot(root.right)
        
        cur = [root.val]
        return cur + left + right
        
        #else, root has some value, and potentially some tree values beneath it.
        

    def serialize(self, root):
        #Let's encode it as they ask us to, in '[1,2,3,null,null,4,5]' format.  replace nulls with nones.
        #preorder traversal.
        self.ls = []
        if root is not None:
            self.ls.append(root.val)
            left = self.pot(root.left)
            right = self.pot(root.right)
            if left:
                self.ls += left
            if right:
                self.ls += right
        else:
            self.ls = [None]
        return self.ls

    def deserialize(self, data):
        print("Deserialize: Data: ", data)
        #turn array into a tree.
        #root will be at first value.
        """Decodes your encoded data to tree.
        
        :type data: str
        :rtype: TreeNode
        """
        
        s = [data[0]]
        
        def recDeserialize(l):
            if l[0] is None:
                return l.pop(0)
            
            root = TreeNode(l.pop(0))
            root.left = recDeserialize(l)
            root.right = recDeserialize(l)
            return root
        
        root = recDeserialize(data)
        return root  

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.deserialize(codec.serialize(root))