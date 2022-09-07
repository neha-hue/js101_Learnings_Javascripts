let n=5;
for(let i=1;i<=n;i++){
  let bag=""
  for(let j=1;j<=n;j++){
    if(i==1 && j!=1 && j!=n){
      bag+="*"
    }
    if(i==n && j!=1 && j!=n){
      bag+="*"
    }
    if(j==1 && i!=1 && i!=n){
      bag+="*"
    }
    if((j==n) && i!=n && (i>=Math.ceil(n/2))){
      bag+="*"
    }
    if((i==Math.ceil(n/2)) && j!=n && (j>=Math.ceil(n/2))){
      bag+="*"
    }
    else{
      bag+=" "
    }
    
    
    
    
    
  }
  console.log(bag)
}