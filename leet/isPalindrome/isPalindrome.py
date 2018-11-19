#Same problem as is in CTCI.  Find if a linked list is a palindrome.
#Now do it in O(1) extra space.
class Solution:
    def isPalindrome(self, head):
        slow = head
        fast = head
        valStack = []

        while fast and fast.next:
            valStack.append(slow.val)
            slow = slow.next
            fast = fast.next.next

        if fast:
            slow = slow.next

        while slow:
            if slow.val != valStack.pop(-1):
                return False
            slow = slow.next
        return True
