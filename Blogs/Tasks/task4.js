
let obj1={
    name:"person1",
    age:5
}
let obj2={
    age:5,
    name:"person1"
}

console.log(JSON.stringify(obj1))===(JSON.stringify(obj2));
/*if not equal
let obj1={
    name:"person1",
    age:5
}
let obj2={
    age:undefined,
    name:"person1"
}

console.log(JSON.stringify(obj1))===(JSON.stringify(obj2));

now it will throw error
*/