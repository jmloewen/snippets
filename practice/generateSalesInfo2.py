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
    
    #two dictionaries to hold our intermediate values.
    totalQuantity = defaultdict(lambda: 0)
    totalUsers = defaultdict(lambda: set())
    
    maxQuantity = -1
    maxQuantityList = set()
    maxUsers = -1
    maxUsersList = set()

    #get the total quantity for each product
    for i in range(len(data)):
        totalQuantity[data[i]['product_id']] += data[i]['quantity']
        totalUsers[data[i]['product_id']].add(data[i]['user_id'])

        if totalQuantity[data[i]['product_id']] > maxQuantity:
            #New Maximum found.  Update our list of max items.
            maxQuantityList = set()
            maxQuantity = totalQuantity[data[i]['product_id']] 
            maxQuantityList.add(data[i]['product_id']) #add value to Set
        elif totalQuantity[data[i]['product_id']] == maxQuantity:
            #something has tied our maximum.  Add it to our set.
            maxQuantityList.add(data[i]['product_id'])

        #same as above with users
        if len(totalUsers[data[i]['product_id']]) > maxUsers:
            maxUsersList = set()
            maxUsers = len(totalUsers[data[i]['product_id']])
            maxUsersList.add(data[i]['product_id'])
        elif len(totalUsers[data[i]['product_id']]) == maxUsers:
            maxUsersList.add(data[i]['product_id'])
        
    print("Most popular product(s) based on the number of purchasers: ", list(maxUsersList))
    print("Most popular product(s) based on the quantity of goods sold: ", list(maxQuantityList))

generateSalesInfo("sample_data.csv")