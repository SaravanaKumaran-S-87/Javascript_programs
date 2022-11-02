function sumAll(arr) {
    arr.sort(function(a,b){
      return a-b;
    });
    let sum=0;
   for (let i=arr[0];i<=arr[arr.length-1];i++){
     sum+=i;
    
   };
   return sum;
  }
  
  console.log(sumAll([1, 4]));