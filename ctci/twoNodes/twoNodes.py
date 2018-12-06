#have a binary tree with two types of node:
    #internal
        #contains combined length of the subtree,
    #leaf
        #contains string and the length of the string

#step 1: define leaf node, internal node.
#step 2: build the tree with this definition.
    #suggestion: write a function in internal to calculate length for the internal node.

class LeafNode(object):
    def __init__(self, S):
        self.str  = S
        self.strlen = len(S)


class InternalNode(object):
    def __init__(self, length):
        self.length = length

    