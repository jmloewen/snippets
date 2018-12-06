
class Trie(object):

    def __init__(self):
        self.ltr = "*"
        self.children = {}
        self.ctr = 0
        self.end = False
        """
        Initialize your data structure here.
        """
    #Tries have a root node of * and children nodes of each letter in the alphabet
    #Each node recursively can hold each letter in the alphabet benath it.
        

    def insert(self, word):
        #inserting a word into the trie.
        
        #When inserting into a trie, there are two possible states for each inserted node.
        #Either it is not in the trie,
            #In which case it gets inserted, creating a new Trie for each newly added node with count of 1
        #Or it is already in the trie.
            #In which case, we just add 1 to the existing values of the trie, until we hit the end of the word, at which point we flip the end flag to True.
        
        curNode = self
        
        for ltr in word:
            if curNode.children.get(ltr): #If there is an entry for this letter
                t = curNode.children[ltr]
                t.ctr += 1
                curNode = t
                pass
            else: #There is no entry for this letter.  Create a Trie for it.
                t = Trie()
                t.ltr = ltr
                t.ctr = 1
                
                #append the trie
                curNode.children[ltr] = t
                curNode = t
                
        #we are now at the end of the word.  curNode is in position.
        curNode.end = True
                
        """
        Inserts a word into the trie.
        :type word: str
        :rtype: void
        """
        

    def search(self, word):
        curNode = self
        for ltr in word:
            if curNode.children.get(ltr):
                curNode = curNode.children[ltr]
            else:
                return False
        return curNode.end
        """
        Returns if the word is in the trie.
        :type word: str
        :rtype: bool
        """
        

    def startsWith(self, prefix):
        curNode = self
        for ltr in prefix:
            if curNode.children.get(ltr):
                curNode = curNode.children[ltr]
            else:
                return False
        return True
        """
        Returns if there is any word in the trie that starts with the given prefix.
        :type prefix: str
        :rtype: bool
        """
        


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)