class Solution(object): #Iterate through all values in each list, then sort them, then iterate again.  NlogN.
    def mergeKLists(self, lists):
        if not lists:
            return
        
        listDump = []
        for l in lists:
            while l:
                listDump.append(l.val)
                l = l.next
                    
        if len(listDump) == 0:
            return []
        
        listDump.sort()
        nd = ListNode(listDump[0])
        head = nd
        i = 1
        while i < len(listDump):
            nx = ListNode(listDump[i])
            nd.next = nx
            nd = nx
            i += 1
        
        return head