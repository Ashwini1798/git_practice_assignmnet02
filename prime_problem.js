function checkPrime(num){
  let factors=0;
  for(let i=2; i<=num; i++){
    if(num%i==0){
      factors++}
    }
    if(factors==2){
      return true;
    }
    return false;

  }
}
let ans=checkPrime(17)
if(ans==true){
    console.log("Prime number")
  }else{
    console.log("Not prime number")
  }
