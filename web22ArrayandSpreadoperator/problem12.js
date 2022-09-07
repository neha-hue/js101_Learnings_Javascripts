let n=5;
for(let i=1;i<=n;i++){
  let bag="";
  for(let j=1;j<=n;j++){
    if(j==Math.ceil(n/2) || (i==1 )  || (i==n &&j<Math.ceil(n/2))){
      bag+="*"
    }
    else{
      bag+=" "
    }
  }
  console.log(bag)
}