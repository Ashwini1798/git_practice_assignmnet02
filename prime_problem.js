
function checkPrime(Number){
  let factor=0
  for(let i=2; i<=num; i++){
    if(Number%i==0){
      factor++
    }
    if(factors==2){
      return true;
    }
    return false;

  }
}
let ans=checkPrime(17)
if(ans==true){
    console.log("Prime Number")
  }else{
    console.log("Not prime Number")
  }
