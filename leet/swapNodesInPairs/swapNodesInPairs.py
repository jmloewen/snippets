#A simple unoptimized 100% time solution, 55% space.

# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def swapPairs(self, head):
        
        if not head:
            return head
        
        first, second, prev = head, head.next, None
        if first and second:
            head = second
        else:
            return head
        while first and second:
            #want second to be put in first's place and first in second's.
            first.next = second.next
            second.next = first
            
            if prev:
                prev.next = second
            prev = first
            
            if first.next:
                second = first.next.next
                first = first.next
            else:
                #nothing left to swap
                break
        return head
                
        """
        :type head: ListNode
        :rtype: ListNode
        """
        