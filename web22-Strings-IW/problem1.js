//Problem 1 : Given a string count the number of words in that string
let str="Hey there how are you"
let count=0
for(let i=0;i<str.length;i++){
  if(str[i]==" "){
    count++;
  }
}
if(str.length==0){
  console.log(0)
}
else{
  console.log(count+1)
}