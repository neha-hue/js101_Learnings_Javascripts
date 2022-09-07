let n=5;
for(let i=1;i<=n;i++){
  let bag="";
  for(let j=1;j<=n;j++){
    if(i==1 || j==n){
      bag+="*"+" "
    }
    else{
      bag+=" "
    }
  }
  console.log(bag)
}