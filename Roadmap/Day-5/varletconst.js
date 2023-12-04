/*var aj = 5;
console.log(aj);
var aj ="five";
console.log(aj);*/

/*let aj =55;
console.log(aj);
aj=85;
console.log(aj);*/

/*const aj = 5;
console.log(aj);
aj =15;
console.log(aj); */ //const cant be reassigned(Assignment to constant variable.-error)

/*for (let i=0;i<=10;i++){
    console.log(i);
}
console.log(i);*///let only work inside the block not outside,if we run outside the loop we will get error, but var variable is function scoped it will work even outer

/*let num = [1,2,3,4];
console.log(...num); spred operator
console.log(1,2,3,4);*/

/*let num = [1,2,3,4];
let copynum =[...num,5,6,7];
console.log(copynum); usage of spread ;*/

/*let num =("one","two");
let copynum =(...num,"three");
console.log(copynum);*/ // only can be used inside array[] and not strings()

/*let human = {
    name :"arj",
    age:25
}
let human2 ={...human};
console.log(human2); we can nest object inside object using spread*/
/*
let num =[25,85,98,1030];
console.log(Math.max(...num)); used to find maximum value of an array*/

/*//let num = [78,55,980];
//console.log(Math.max(78,55,980));/*another way to use Math.max library*/

//rest operator ...

/*function call (a){
    console.log(a);
}
call(5);*/


/*function call (a,...aj){
    console.log(...aj);
}
call(5,9,10,11,012,250); we can use to assign value like we dont want to give variable to the numbers ,instead we can use ...rest or any word to call the function */
/*destructuring*/
//unpack valuse from array or properties of object

/*let a = [1,2,3];
let x=a[0];
let y=a[1];
let z=a[2];
console.log(x,y,z);*/

/*let a = [1,2,3];
let [x,y,z]=a;
console.log(x,y,z);*/
/*
let [a,...b] = [1,2,3,7,8,98,78,9,79,97,9795,648,54];

console.log(a,b);*/ // we can store 

/*let time = [60,100,2];
let [hours,minutes,seconds]=time;
let cal=(hours * minutes * seconds)/100;
console.log(cal);*/ //example of calculation using destructuring
/*
let a=1;
let b=2;
console.log("before swap")
console.log('a=',a ,'and', 'b =',b);
let temp =a;
a=b;
b=temp;
console.log("afer swap");
console.log('a=',a,'and','b=',b);
swapping concept*/
/*let a=1;
let b=2;
[a,b]=[b,a];
console.log(a,b); using destructure concept swapping */

/*object destrucutre*/
let person = {
    name:"arjun",
    age:25
}
console.log((person.name,person.age));
