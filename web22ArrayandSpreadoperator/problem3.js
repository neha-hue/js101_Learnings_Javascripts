//Problem 3 : Given an array of numbers find the average of all the even numbers.
let arr=[56,78,98,89,100]
let sum=0;
let count=0
for(let i=0;i<arr.length;i++){
  if(arr[i]%2==0){
    sum+=arr[i]
    count++
  }
  
}
let avg=sum/count
console.log(avg)
