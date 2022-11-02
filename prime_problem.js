function checkPrime(num){
  let factor=0
  for(let i=2; i<=num; i++){
    if(num%i==0){
      factor++}
    }
    if(factor==2){
      return true;
    }
    return false;

  }
}
let ans=checkPrime(13)
if(ans==true){
    console.log("Prime number")
  }else{
    console.log("Not prime number")
  }
