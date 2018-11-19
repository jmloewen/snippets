# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

#Same problem as in CTCI.
#CTCI asks to do it in forward order as well, but it's honestly no more difficult in python.

class Solution:
    def addTwoNumbers(self, l1, l2):

        if not l1:
            if l2:
                return l2
            return None
        elif not l2:
            return l1

        curSum = 0
        mpl = 1
        while l1 and l2:
            curSum += (l1.val * mpl) + (l2.val * mpl)
            mpl *= 10
            l1 = l1.next
            l2 = l2.next


        while l1:
            curSum += l1.val * mpl
            mpl *= 10
            l1 = l1.next
        while l2:
            curSum += l2.val * mpl
            mpl *= 10
            l2 = l2.next

        head = None
        cur = None
        prev = None
        if curSum == 0:
            return ListNode(0)
        else:
            while curSum != 0:
                d = int(curSum % 10)
                curSum = curSum // 10

                cur = ListNode(d)
                if prev:
                    prev.next = cur
                else:
                    head = cur
                prev = cur

            return head
