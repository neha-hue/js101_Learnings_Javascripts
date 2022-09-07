let N=10;
for(let i=1;i<=N;i++){
  let bag=""
  for(j=1;j<=i;j++){
    bag+=" "
  }
  for(j=i;j<=N;j++){
    if(j==1 || j==i )
    bag+="\\"
    else
    bag+=" "
  }
  for(j=i;j<=N;j++){
    if(j==N)
    bag+="/"
    else
    bag+=" "
  }
  for(j=1;j<=i;j++){
    bag+=" "
  }
  for(j=1;j<i;j++){
    bag+=" "
  }
  for(j=i;j<=N;j++){
    if(j==1 || j==i )
    bag+="\\"
    else
    bag+=" "
  }
  for(j=i;j<=N;j++){
    if(j==N)
    bag+="/"
    else
    bag+=" "
  }
  console.log(bag)
  
}
//console.log("\\")