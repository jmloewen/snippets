#Same as it is on leetcode - a 99% solution 
class Solution:
    def partition(self, head, x):
        startL = None
        startR = None
        left = None
        right = None

        if not head:
            return []

        while head:
            if head.val < x:
                if not startL:
                    left = ListNode(head.val)
                    startL = left
                else:
                    left.next = ListNode(head.val)
                    left = left.next
            else:
                if not startR:
                    right = ListNode(head.val)
                    startR = right
                else:
                    right.next = ListNode(head.val)
                    right = right.next
            head = head.next

        if not startL:
            return startR
        if startR:
            left.next = startR
        return startL
