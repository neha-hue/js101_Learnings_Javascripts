let n=10;
for(let i=1;i<=n;i++){
  let bag=""
  for(let j=i;j<=n;j++){
    bag+=" "
  }
  for(let j=1;j<i;j++){
    if(j==1 || i==Math.ceil(n/2)){
       bag+="*"
    }
    else{
      bag+=" "
    }
   
  }
  for(let j=1;j<=i;j++){
    if(j==i || i==Math.ceil(n/2)){
      bag+="*"
    }
    else{
      bag+=" "
    }
    
  }
 console.log(bag) 
}



