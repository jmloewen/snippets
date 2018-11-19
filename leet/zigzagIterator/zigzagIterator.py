class ZigzagIterator(object):

    def __init__(self, v1, v2):
        self.monitor = 1
        self.s1 = v1
        self.s2 = v2

    def next(self):
        if self.hasNext():
            if self.monitor == 1:
                if self.s1:
                    self.monitor = 2
                    return self.s1.pop(0)
                else:
                    self.monitor = 2
                    return self.s2.pop(0)
            else:
                if self.s2:
                    self.monitor = 1
                    return self.s2.pop(0)
                else:
                    self.monitor = 1
                    return self.s1.pop(0)

    def hasNext(self):
        if self.s1 or self.s2:
            return True
