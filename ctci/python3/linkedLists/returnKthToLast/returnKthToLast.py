# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

#Going through CTCI - "Return" Nth last, instead of "Remove".  Will do Remove first.
#Removed Kth to Last instead of returning in Leetcode.  Modified to return.
class Solution:
    #Advance a node to be n values ahead of head, then advance until this node is at the end.
    #Note that "Nth Last" means that in example where n=2 in 1,2,3,4,5 - 4 would be removed
    def returnKthToLast(self, head, n):
        if not head.next:
            return []

        nd = head
        lead = head
        i=0

        while lead:
            if i > n:
                nd = nd.next
            lead = lead.next
            i += 1

        if i == n:
            #head = head.next
            return head
        else:
            #nd.next = nd.next.next
            return nd.next
