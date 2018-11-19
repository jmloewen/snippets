        self[key] = value
#To do Puts in constant time, this means we need to be able to do Removals in constant time.
#This is covered by using a dictionary for our KVP.
#We also need to do insertions in constant time, but this is also covered by the dict.

#To do Gets in constant time, we need to be able to do removals WITHIN the 'least recently used' stack in constant time.
#This means that this least recently used stack must be indexed somehow - maube this should also be a dict?
#Do with OrderedDict?

from collections import OrderedDict

class LRUCache:
    #What if we're inserting a value that already exists?  What happens?
    cache = {}
    capacity = -1

#current capacity will be measured with size of s.
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = OrderedDict()
        #Example: first_item = self.cache.popitem(last=False)

    def get(self, key):
        if self.cache.get(key):
            ret = self.cache[key]
            #Remove and re-insert to preserve most recently used.
            del self.cache[key]
            self.cache[key] = ret
            return ret
        return -1
        #Get ejects the oldest value at key.

        """
        :type key: int
        :rtype: int
        """


    def put(self, key, value):

        #If we're overwriting, there's no need to check if we're at capacity.  Just do a simple update.
        if self.cache.get(key):
            del self.cache[key]
            self.cache[key] = value
            return
        else:
        #There's a new key, so we have to remove the oldest one if we're at capacity.
            if len(self.cache) == self.capacity:
                out = self.cache.popitem(last=False)
        self.cache[key] = value

        """
        :type key: int
        :type value: int
        :rtype: void
        """



# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
