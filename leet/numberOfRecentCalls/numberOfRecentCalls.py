#Written for Leetcode Weekly Contest 109
class RecentCounter:
    def __init__(self):
        #append to the stack when we get new pings.
        self.pings = []

    def ping(self, t):
        self.pings.append(t)

        while self.pings:
            if self.pings[0] < t-3000:
                self.pings.pop(0)
            else:
                break
        return len(self.pings)
