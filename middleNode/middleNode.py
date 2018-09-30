class Solution:
    def middleNode(self, head):
        end = head
        mid = head

        while end and end.next:
            mid = mid.next
            end = end.next.next
        return mid
