/*let num =[1,2,3,4,5]
for(let i =0;i<5;i++){
    if(num[i]%2==0)
    console.log(num[i],"its even");
else
console.log(num[i],"its odd");
}*/
//Print odd numbers in an array anonymous
/*(function (){
    let num =[1,2,3,4,5]
    for(let i =0;i<5;i++){
        if(num[i]%2==0)
        console.log(num[i],"its even");
    else
    console.log(num[i],"its odd");
}})();*/
// Print odd numbers in an array IIFE
/*(=>(){
    let num =[1,2,3,4,5]
    for(let i =0;i<5;i++){
        if(num[i]%2==0)
        console.log(num[i],"its even");
    else
    console.log(num[i],"its odd");
}})();*/
function sumofnumbers(){
let arr = [4, 8, 7, 13, 12];
 let sum = 0;
 for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    sum=sumofnumbers;
}
console.log("sum is".sumofnumbers());
}