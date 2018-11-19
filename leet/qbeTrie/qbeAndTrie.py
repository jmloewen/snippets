#Let's make this faster.

# Enter your code here. Read input from STDIN. Print output to STDOUT
import json
from collections import OrderedDict

#ugh, but i should write it here probably so it doesnt look like i just pasted it in from elsewhere
#I'll update it incrementally here.

#Lets see how far this can go.
class TrieNode(object):
    #A=1, B=2, .... Z = 26.
    asciiConst=65
    def __init__(self, letter):
        self.letter = letter
        self.arr = {}
        self.payload = None
        self.isEnd = False

def newTrie():
    return TrieNode("*")

#This converts a dictionary into a Trie, as well as any dictionaries within that dictionary.
def dictToTrie(d):
    dictTrie = newTrie()
    #For every key in this dictionary, I add its key to the trie node, and the value as the end payload
    for key in d.keys():
        if type(d[key]) is OrderedDict:
            subTrie = dictToTrie(d[key])
            addKVP(dictTrie, key, subTrie)
        #Let's pretend Arrays can't hold dictionaries and see how far we can get.
        else:
            addKVP(dictTrie, key, d[key])
    return dictTrie

#Word will be sent in via Text.  Letter on the node should be it's whole letter self.
def addKVP(node, word, payload):
    word = word.upper()
    for letter in word:
        #Val is the converted value that will be thrown in the array.
        val = ord(letter) - node.asciiConst

        #If there's a character at this letter, traverse to it.
        if node.arr.get(val, None):
            node = node.arr[val]
        #Otherwise, we have to make a new node.
        else:
            newNode = TrieNode(letter)
            #This was my mistake.
            #newNode.payload = payload
            node.arr[val] = newNode
            node = newNode
    #A reminder that the node that this is printed on is the last one in the word, regardless of whether or not the node was just added.
    node.isEnd = True
    #This is where the fix should have gone, if i remember correctly.
    node.payload = payload

#Return the payload of the given Trie with the given key, if it exists.
def findPayloadInTrie(node, key):
    key = key.upper()
    for letter in key:
        if node.arr.get(ord(letter)-node.asciiConst, None):
            node = node.arr[ord(letter)-node.asciiConst]
        else:
            return None

    if node.isEnd:
        return node.payload
    return None

class QbeParser:
    #Storage is a collection of json dumps.
    storage = []
    plaintext = []

    #Set up that storage.
    def __init__(self):
        self.plaintext = []
        self.storage = []

    #Grab the command and its associated data.  This shouldn't be a source of errors.
    #In: Line - The associated line of data we want to parse.
    #Out: The given command, and its data.
    def splitLine(self, line):
        #Let's label commands 0, 1, 2 for add, get, delete.
        try:
            splitData = line.split(" ", maxsplit=1)

            if splitData[0] == "add":
                splitData[0] = 0
            elif splitData[0] == "get":
                splitData[0] = 1
            elif splitData[0] == "delete":
                splitData[0] = 2
            else:
                #Invalid.  Give it an appropriately invalid number
                splitData[0] = 9
            return splitData[0], splitData[1]
        except ValueError(e):
            pass
        return False

    #The Add command.  Add values sent to class storage.
    #What if we check to see if all queries ARE like the above?
    def addData(self, data):
        if not data:
            return False

        #Encode to proper JSON format, maintaing insertion order.
        jsonData = json.JSONDecoder(object_pairs_hook=OrderedDict).decode(data)

        trie = dictToTrie(jsonData)

        #Append to the stack.  Read the stack from bottom to top when printing.
        self.storage.append(trie)
        self.plaintext.append(data)
        return True

    #Searches through two sent Dictionaries to see if Kwiery is inside of Item.
    #Takes in the dictionary to search through, and the dictionary to be found.  Returns True if found False if not.
    def searchDict(self, item, q):
        if not q:
            return True
        elif not item:
            return False

        for key in q.keys():
            #Search through this Trie for each key.
            payload = findPayloadInTrie(item, key)
            if payload:
                if type(payload) is TrieNode and type(q[key]) is dict:
                    #We have to go deeper
                    if not self.searchDict(payload, q[key]):
                        return False
                #primitive types
                elif type(payload) is list and type(q[key]) is list:
                    payloadCP = []
                    for num in payload:
                        payloadCP.append(num)
                    try:
                        for num in q[key]:
                            payloadCP.remove(num)
                    except ValueError:
                        return False
                else:
                    if payload != q[key]:
                        return False
            else:
                if q[key]:
                    return False
        return True

    #The Get command.  Retrieves data from Search and prints it to the screen.
    def getData(self, q):
        if not q:
            for i, item in enumerate(self.storage):
                print(plaintext[i])
            return True
        elif not self.storage:
            return False

        q = json.loads(q)

        #Build a list of matching values.
        matches = []

        #Loop through all items in storage.  Is there a better way?
        for i, item in enumerate(self.storage):
            #We are qing each item in storage with q.
            if self.searchDict(item, q):
                matches.append(self.plaintext[i])
        for match in matches:
            if match:
                print(match)

    #The Delete command.  Delete q data from storage.
    def deleteData(self, q):
        if not q:
            self.storage = []
            self.plaintext = []
            return True
        elif not self.storage:
            return False

        q = json.loads(q)

        #Remove items in inverse order to avoid indexing issues.
        for i in range(len(self.storage)-1, -1, -1):
            if self.searchDict(self.storage[i], q):
                del self.storage[i]
                del self.plaintext[i]

    #I could call it something else, but why not main?
    def main(self):
        try:
            line = input()
        except EOFError:
            return None

        while line:
            command, data = self.splitLine(line)

            if command == 0:
                self.addData(data)
            elif command == 1:
                self.getData(data)
            elif command == 2:
                self.deleteData(data)
            else:
                pass
            try:
                line = input()
            except EOFError:
                line = None

qbe = QbeParser()
qbe.main()
