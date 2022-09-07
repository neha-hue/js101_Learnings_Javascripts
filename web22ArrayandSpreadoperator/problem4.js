//pattern
let N=5

for(let i=1;i<=N;i++){
  let bag=""
  
  for(j=1;j<=2*N;j++){
    if((i==j || i+j==2*N)){
      bag+="*"
    }
    else{
      bag+=" "
   
     }
  }
  console.log(bag)
}

