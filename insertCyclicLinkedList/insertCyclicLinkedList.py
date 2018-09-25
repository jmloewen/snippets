#This needs refactoring and is bad.  a 72%.
"""
# Definition for a Node.
class Node:
    def __init__(self, val, next):
        self.val = val
        self.next = next
"""
class Solution:
    def insert(self, head, insertVal):
        if not head:
            nd = Node(insertVal, None)
            nd.next = nd
            return nd

        #First, find insertion point.
        ptr = head
        nex = ptr.next

        while ptr:
            #A single value list.  insert as the next value.
            if ptr == nex:
                ptr.next = Node(insertVal, ptr)
                break
            elif nex == head:
                #If next is the head, we've done a full loop without finding an insertable position.  Insert it here.
                ptr.next = Node(insertVal, nex)
                break
            elif ptr.val < insertVal:
                if nex.val >= insertVal or nex.val <= ptr.val:
                    ptr.next = Node(insertVal, nex)
                    break

            elif ptr.val > insertVal and nex.val >= insertVal and ptr.val >= nex.val:
                ptr.next = Node(insertVal, nex)
                break

            ptr = ptr.next
            nex = ptr.next
        return head
        
