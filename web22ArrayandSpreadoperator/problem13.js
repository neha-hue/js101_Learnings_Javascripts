let n=10;
for(let i=1;i<=n;i++){
   let bag=""
  for(let j=1;j<=n;j++){
   
    if(j==1 || (i+j==n) ||(j==i-2 && i==n && j!=n)){
      bag+="*"
    }
    else{
      bag+=" "
    }
    
  }
  console.log(bag)
  
  
}