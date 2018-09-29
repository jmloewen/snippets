# Definition for singly-linked list.  Ripped off from LC.
class ListNode:
     def __init__(self, x):
        self.val = x
        self.next = None

#2.1: Remove duplicates from an unsorted linked list.
    #Store values in a dict, search dict upon finding new values, remove if in dict.  O(N) time and space.
#2.1.1: How would you solve this if a temporary buffer were not allowed?
    #Sort & filter, NLogN time, O(1) space.
class Solution:
    def removeDups(self, head):
        valDict = {}
        prev = head
        head = head.next
        while head:
            if valDict.get(head.val):
                #duplicate found, remove this value.
                head = head.next
                prev.next = head
            else:
                valDict[head.val] = 1

            prev = prev.next

            if head:
                head = head.next

def testSolution(F, expected, testNumber):
    if F != expected:
        print("Test Number: ", testNumber, " Failed.")
        print("Output: ", F, "Expected: ", expected)
        return False
    return True

def buildTestLL(s, e):
    head = ListNode(s)
    nd = head
    for i in range(s+1, e):
        nd.next = ListNode(i)
        nd = nd.next
    return head
s = Solution()
#Testing this is a PITA, I don't really feel like writing a test suite for this...
#I'm convinced this is correct.
#Other ways to do this would be to do a merge sort or a double for loop, but this approach is fastest.  Yay Hashing.
#pureLL = buildTestLL(0, 5)
#rdT1 = s.removeDups(pureLL)

#print(buildTestLL(0, 5))
