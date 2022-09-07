let n=5;
for(let i=1;i<=n;i++){
  let bag=""
  // for(let j=1;j<=i;j++){
  //   bag+=" "
  // }
  for(let j=1;j<=n;j++){
    if(i==Math.ceil(n/2)){
      bag+="*"
    }
    else if(i==1 || i==n || j==1){
      bag+="*"+" "
    }
  }
  console.log(bag)
}