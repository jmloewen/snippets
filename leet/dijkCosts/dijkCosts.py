#Today i did a (probably flawed, probably broken) dijkstra's, just to make sure that I could.
#But it works on the G4G example, and that's good enough for me right now.

from collections import defaultdict
class Solution():
#Assumptions:
#No negative edge weights
#no loops
#only one edge between nodes.
#edges are bidirectional.

    def makeGraph(self, A):
        #for each node in A, A:B == B:A.

        graph = defaultdict(lambda:{})

        for edge in A:
            graph[edge[0]][edge[1]] = graph[edge[1]][edge[0]] = edge[2]
        return graph

    def dijk(self, A, x):
        #Find the shortest path between some start and some target.

        #first, construct the graph.
        graph = self.makeGraph(A)


        #We now have an adjacency list of values.

        #Proceed from A and find the min path to all other nodes it can visit!

        #Process:
        #Starting from A, whose cost to visit is 0, find minimum cost to visit of each other node.
        #-1 indicates that we cannot visit this node from the given input node.
        cost = defaultdict(lambda:-1)
        cost[x] = 0

        q = [x]

        visited = set()

        #from current node (start at starting node)
        #Look at all neighbors.  Find the smallest traverseable one in q.
        #Remove it from q, and mark it as visited.
        #look at all of its neighbors and add them to q.
        #Update weights if traversing here has found a new, shorter path.

        #Reminder that q is filled with node letters.
        while q:
            cur = self.getMinNode(cost, q)

            #Remove smallest value.
            #cur is the smallest traverseable value.

            #imagine we're starting from start node.  Look at all neighbors and determine their costs to traverse.
            #look at all neighbors.
            for nd in graph[cur]:
                #If the combined path to get here is less than the current calculated cost of this node, we need to update the cost.

                if nd in visited:
                    continue
                elif cost[nd] == -1:
                    cost[nd] = graph[cur][nd] + cost[cur]

                    q.append(nd)
                elif graph[cur][nd] + cost[cur] < cost[nd]:
                    cost[nd] = graph[cur][nd] + cost[cur]



            visited.add(cur)
        return cost
    def getMinNode(self, cost, q):
        #Find smallest visitable distance in all nodes in q.
        #q is a list of visitable nodes from this location.
        #cost is a dictionary with all current values of q.
        #we want the smallest cost of all values in q.

        #Theres probably a less janky way to do this comparison with a dict.
        mindex = None
        for i in range(0, len(q)):
            if mindex is None or cost[q[i]] < cost[mindex]:
                mindex = i

        rv = q.pop(mindex)
        return rv


nodes = [['A', 'B', 5], ['B','C',10], ['A','C',4], ['A','D',3],['B','D',4], ['C', 'E', 6], ['B', 'E', 4], ['D','F',5],['A','F',13],['F','G',2],['D','G',8]]

nd2 = [[0,1,4], [0,7,8],[1,2,8],[1,7,11],[2,3,7],[2,8,2],[2,5,4],[3,4,9],[3,5,14],[4,5,10],[5,6,2],[6,7,1],[6,8,6],[7,8,7]]

s = Solution()
print(s.dijk(nodes, 'A'))
print(s.dijk(nd2, 0))
