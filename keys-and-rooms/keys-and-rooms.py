#a slow implementation of keys and rooms
from collections import defaultdict

class Solution(object):
    def canVisitAllRooms(self, rooms):
        #there are len(rooms) rooms.
        #start at room 0.
            #put all keys that room 0 contains into a stack, supposing we haven't visited them yet.

        if len(rooms) == 1:
            return True

        visited = defaultdict(lambda:False)
        visited[0] = True
        unvisited = set()

        for room in rooms[0]:
            unvisited.add(room)

        while len(unvisited) > 0:
            visiting = unvisited.pop()
            visited[visiting] = True

            for room in rooms[visiting]:
                if not visited[room]:
                    unvisited.add(room)
            if len(visited) == len(rooms):
                return True

        return False
