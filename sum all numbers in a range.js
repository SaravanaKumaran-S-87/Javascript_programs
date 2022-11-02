Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

Tests cases:
Waiting:sumAll([1, 4]) should return a number.
Waiting:sumAll([1, 4]) should return 10.
Waiting:sumAll([4, 1]) should return 10.
Waiting:sumAll([5, 10]) should return 45.
Waiting:sumAll([10, 5]) should return 45.


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
