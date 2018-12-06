#print the outer edge of a tree in order.  so, leftmost edge, then all leaf nodes, then rightmost edge, from the bottom up.
#Note that if a leftmost node has no left child but it has a right child, that right child is still part of the leftmost edge.


class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

#Given some root, find all node values on the side of the tree.
def getLeftNodes(root):
    vals = []
    lastLeft = None
    while root:
        vals.append(root.val)
        if root.left:
            root = root.left
        elif root.right: #if root.left is false, then root.right must be true.
            root = root.right
        else:
            lastLeft = root
            root = None
    return vals, lastLeft #return root so that we can check it against the right tree later, to ensure that we can differentiate between nodes of the same value.
            
def getRightNodes(root):
    vals = []
    while root:
        vals.append(root.val)
        if root.right:
            root = root.right
        elif root.left:
            root = root.left
        else:
            lastRight = root
            root = None
    return vals, lastRight

#A leaf node has no children.  root.left and root.right will equal None.
def getLeafNodes(root):
    #iterate through to the bottom of the tree, biasing left iteration before right iteration.
    #if this function is called with a node with no children, we return root.val

    if not root:
        return None

    #otherwise, this node has SOME child.  we want to iterate on the left first, if it exists, and then the right, if it exists.
    left = [getLeafNodes(root.left)]
    right = [getLeafNodes(root.right)]

    if left[0] is None and right[0] is None:
        return root.val

    leaves = []

    for leaf in left:
        if leaf is not None:
            leaves = leaves + leaf

    for leaf in right:
        if leaf is not None:
            leaves = leaves + leaf

    return leaves

    #if we're not at a leaf node, we want to iterate through the branch until we find some 

def outerEdgeOfTree(root):
    #Thoughts?
    #It's easy enough to do the leftmost side.
    #All children other than this leftmost node might be a problem, but as we walk back up the tree from this final leftmost node, we just have to keep going until we hit the bottom of each branch.
    #How easy will it be to know if we've hit the bottom right node?  After we do so, we have to climb back up the right hand side of the tree.  the best way to do this is recusrively.

    #Instead of iterating down then back up, why not iterate down left hand side, then iterate down right hand side and grab these values (while eliminating the root) and reverse this list, then look at all intermediary children?  This would be my strategy.

    leftNodes, leftChild = getLeftNodes(root)
    rightNodes, rightChild = getRightNodes(root)

    if leftChild == rightChild:
        #we have a single branch and can just return leftNodes
        print("LEFT==RIGHT")
        return leftNodes



    childNodes = getLeafNodes(root)

    print("CHILD PRE_POP: ", childNodes)

    if childNodes:
        childNodes.pop(0)
    if childNodes:
        childNodes.pop()


    rightNodes.pop(0)
    rightNodes = rightNodes[::-1]

    print("LEFT: ", leftNodes)
    print("CHILD: ", childNodes)
    print("RIGHT: ", rightNodes)

    return leftNodes + childNodes + rightNodes
    
    #now we want all child nodes.  iterate through tree and find all of them, then remove first and last.


 #Unknown how to get this easily yet.  Can iterate through all nodes to find all child nodes, O(N), or O(3N) if we just have a single line.
    #Can deal with the edge cases of one line later.  O(N) is just fine, there was no request for one pass.

#Tests:
n1, n2, n3, n4, n5, n6 = TreeNode(0), TreeNode(1), TreeNode(2),TreeNode(3), TreeNode(4), TreeNode(5)

n1.left = n2
n2.left = n3
n2.right = n4
n1.right = n5
n5.right = n6

print(outerEdgeOfTree(n1))