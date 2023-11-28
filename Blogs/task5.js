let XMLHttpReqest = require('xhr2');

let task =new XMLHttpReqest();

task.open('GET','https://restcountries.com/v3.1/all');
task.onload=function(){
    let fla= JSON.parse(task.responseText);
   for (let i in fla) {
    console.log(fla[i].flags);
   }
}
task.send();