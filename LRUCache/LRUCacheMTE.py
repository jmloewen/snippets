#using move_to_end.  This is apparently significantly slower than deleting and making a new value.
from collections import OrderedDict
class LRUCache:
    #What if we're inserting a value that already exists?  What happens?
    cache = {}
    capacity = -1

#current capacity will be measured with size of s.
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = OrderedDict()

    def get(self, key):
        if self.cache.get(key):
            #Remove and re-insert to preserve most recently used.
            self.cache.move_to_end(key)
            return self.cache[key]
        return -1

    def put(self, key, value):
        #If we're overwriting, there's no need to check if we're at capacity.  Just do a simple update.
        if self.cache.get(key):
            self.cache.move_to_end(key)
        else:
        #There's a new key, so we have to remove the oldest one if we're at capacity.
            if len(self.cache) == self.capacity:
                out = self.cache.popitem(last=False)
        self.cache[key] = value
