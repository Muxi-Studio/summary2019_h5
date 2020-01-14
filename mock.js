var Mock = raquire('mockjss')
var data = Mock.mock({
    "minTimes": "2019-10-10 10:00",
    "minPlace": "学子食堂",

    "mostPlace": "string",
    "mostTimes": "string",
    "mostCost": "string",

    "earlisetTime": "10月10日",
    "earliestPlace": "东一食堂 窗口1",
    "latestTime": "10月10日",
    "latestPlace": "东一食堂 窗口abc",
    "famousRestaurant": "1000000" 
})
console.log(JSON.stringify(data, null, 4))