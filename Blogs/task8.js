/*let json = [{
    "id" : "1", 
    "msg"   : "hi",
    "tid" : "2013-05-05 23:35",
    "fromWho": "hello1@email.se"
},
{
    "id" : "2", 
    "msg"   : "there",
    "tid" : "2013-05-05 23:45",
    "fromWho": "hello2@email.se"
}];

for(let i = 0; i < json.length; i++) {
    let obj = json[i];

    console.log(obj.id);
}*/

/*let json = [{
    "id" : "1", 
    "msg"   : "hi",
    "tid" : "2013-05-05 23:35",
    "fromWho": "hello1@email.se"
},
{
    "id" : "2", 
    "msg"   : "there",
    "tid" : "2013-05-05 23:45",
    "fromWho": "hello2@email.se"
}];
for (let i in json){
    console.log(json.id);
}*/
/*let json = [{
    "id" : "1", 
    "msg"   : "hi",
    "tid" : "2013-05-05 23:35",
    "fromWho": "hello1@email.se"
},
{
    "id" : "2", 
    "msg"   : "there",
    "tid" : "2013-05-05 23:45",
    "fromWho": "hello2@email.se"
}];
for (let i of json){
    console.log(json.msg);
}*/
let json = [{
    "id" : "1", 
    "msg"   : "hi",
    "tid" : "2013-05-05 23:35",
    "fromWho": "hello1@email.se"
},
{
    "id" : "2", 
    "msg"   : "there",
    "tid" : "2013-05-05 23:45",
    "fromWho": "hello2@email.se"
}];
json.forEach((i)=>{
    console.log(i);
})