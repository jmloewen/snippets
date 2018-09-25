#Disgusting.  but apparently a 100%.  There has to be a nicer way to do this.
class Solution(object):
    def isOneEditDistance(self, s, t):
        longer = shorter = 0
        if not s and not t:
            return False
        elif abs(len(s) - len(t)) > 1:
            return False
        elif len(s) - len(t) < 0:
            longer = t
            shorter = s
        else:#Else
            longer = s
            shorter = t
        for i in range(len(shorter)):
            if shorter[i] != longer[i]:
                if shorter[i+1:] == longer[i+1:] or shorter[i:] == longer[i+1:]:
                    return True
                return False
        if len(longer) > len(shorter):
            return True
        return False
