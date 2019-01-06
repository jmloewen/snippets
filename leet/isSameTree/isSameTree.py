#A slow and bad 35%  recursive solution. 

class Solution(object):
    def isSameTree(self, p, q):
        
        #intuition: check node, see for equality, then recursively check p.left, q.left, p.right, q.right to see if they are the same.
        #if at any point they are not, return False.
        
        if p:
            if q:
                if p.val == q.val and self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right):
                    return True
            return False
        elif q:
            return False #q exists but p does not.  return False.
        return True