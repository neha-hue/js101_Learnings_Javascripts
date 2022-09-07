//Problem 2 : Given an array of string count the overall total number of characters
let arr=["neha","abhi","neha","kajal","priya"];
let count=0
for(let i=0;i<arr.length;i++){
  count+=arr[i].length
}
console.log(count)

// for(let i=0;i<arr.length;i++){
//   for(let j=0;j<arr[i].length;j++){
//     count++
//   }
// }
// console.log(count)