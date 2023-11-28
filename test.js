/*let XMLHttpReqest = require('xhr2');
let arjun = new XMLHttpReqest();
arjun.open('GET','https://restcountries.com/v3.1/all');
arjun.onload=function () {
    let gow = JSON.parse(arjun.responseText);
    
 
for (let index in JSON.parse(arjun.responseText)){
    console.log(JSON.parse(arjun.responseText)[index].flags);
}
    
    

}
arjun.send();*/

let XMLHttpReqest = require('xhr2');
let arjun = new XMLHttpReqest();
arjun.open('GET','https://restcountries.com/v3.1/all');
arjun.onload=function () {
    let gow = JSON.parse(arjun.responseText);
    
for (let fla in gow ){
    console.log(gow[fla].flags);
}
    
    

}
arjun.send();