# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def hasCycle(self, head):
        #Go through with the two pointer tactic.  If it hits None, it has no loop.  if it hits slow, it does.
        if not head or not head.next:#If either head or next don't exist, it has no cycle.
            return False
        slow = head
        fast = head

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

            if slow == fast:
                return True
        return False
