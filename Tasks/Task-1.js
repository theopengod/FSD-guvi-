Http 1.1
It works on the textual format.
There is head of line blocking that blocks all the requests behind it until it doesn’t get its all resources.
It uses requests resource Inlining for use getting multiple pages
It compresses data by itself.
Http 2
It works on the binary protocol.
It allows multiplexing so one TCP connection is required for multiple requests
It uses PUSH frame by server that collects all multiple pages 
It uses HPACK for data compression.
Objects
A JavaScript object is a collection of named values having state and behavior (properties and method)”.
For example: Person, car, pen, bike, Personal Computer , Washing Machine etc.
All cars have the same properties, but the property values differ from car to car. All cars have the same methods, but the methods are performed at different times.
Eg:
Make: tata
Model: nano
Color: black
Fuel: petrol
Weight: 430 kg
Mileage: 30Kmpl
Rating: 4
var car ="tata"
Object syntax= var <object name> = {key1: value1,key2:value2,...keyN:valueN};
Properties : var car = {Make:"tata",Model:"nano",color:"black",Fuel:"petrol",Weight:"430kg",Mileage:"30kmpl",Rating:4};
Properties can usually be changed, added, and deleted, but some are read only.