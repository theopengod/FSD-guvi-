/*let a= 5;
let b=10;
let c=a+b;
console.log(c, typeof c);
ar =[1,5,7,9,11,15,{city:'chennai'}];  
console.log(ar)
var person ={
    name : 'arjun',age:30,city:'tirupur',arr:[1,2,5,9]
    
}

console.log(person);

let aa=10;
let bb=a;
console.log("A",aa);
console.log("B",bb);
let gow=["pavi","gaya3",2];
let gow2 = gow;
gow[2]="sindhu";
console.log(gow,gow2)

console.log(person.name);
console.log(person["age"]);

var person2 =Object.assign({},person);
person2.name="Gowtham"
console.log(person);
console.log(person2);*/
/*
let person = [
    {
        name:"arjun",
        age:29,
        course:["html","css",{stack:["vue","react"]},
    ],
    },
]
console.log(person);
*/
/*let bio=[
    {
        name:"arjun",
        age:29,
        course:["html",{
            stack:["react","vue",15]}],
        }]
    console.log(bio);
    console.log(bio[2].course(1).stack(1));*/
   /* const nestObj = [
        {
          class: "FSD",
          studend: [
            {
              name: "siva",
              stack: [
                "html",
                "css",
                {
                  js: ["react", " angular"],
                },
              ],
            },
            {
              name: "chandru",
              stack: [
                "html",
                "css",
                {
                  js: ["vue", " react"],
                },
              ],
            },
          ],
        },
      ];
      
      console.log("siva's -", nestObj[0].studend[0].stack[2].js[0]);
      console.log("chandru's", nestObj[0].studend[1].stack[2].js[0]);*/
      
      let n=[55,78,65,89,273,147,567,24]
      for(let a=0;a<10;a++)
      {
          if(n[a]%2==0)
          console.log(n[a]);
          else
          console.log(n[a],"its odd");
      }