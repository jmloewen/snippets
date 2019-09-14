
from collections import defaultdict
import json
def loadData(filename):

    r = open(filename, "r")
    line = r.readline()
    data = []
    while line:
        line = json.loads(line)
        data.append(line)
        line = r.readline()
    r.close()

    return data

def generateSalesInfo(filename="sample_data.csv"):

    data = loadData(filename)
    
    totalQuantity = defaultdict(lambda: 0)
    totalUsers = defaultdict(lambda: set())
    
    #get the total quantity for each product
    for i in range(len(data)):
        totalQuantity[data[i]['product_id']] += data[i]['quantity']
        totalUsers[data[i]['product_id']].add(data[i]['user_id'])
        
    topQuantity = sorted(list(totalQuantity.items()), key=lambda x: x[1], reverse=True)
    topUsers = sorted(list(totalUsers.items()), key=lambda x: len(x[1]), reverse=True)
    
    topSellers = []
    topUserCount = []
    for i in range(len(topQuantity)):
        if topQuantity[i][1] == topQuantity[0][1]:
            topSellers.append(topQuantity[i][0])
        else:
            break
    for i in range(len(topUsers)):
        if len(topUsers[i][1]) == len(topUsers[0][1]):
            topUserCount.append(topUsers[i][0])
        else:
            break
    
    print("Most popular product(s) based on the number of purchasers: ", topUserCount)
    print("Most popular product(s) based on the quantity of goods sold: ", topSellers)

generateSalesInfo("sample_data.csv")
