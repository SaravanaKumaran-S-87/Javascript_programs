Louise and Richard have developed a numbers game. They pick a number and check to see if it is a power of 2 . If it is, they divide it by 2. If not, they reduce it by the next lower number which is a power of 2 . Whoever reduces the number to 1 wins the game. Louise always starts.

Given an initial value, determine who wins the game.

Example
n=132

It's Louise's turn first. She determines that 132  is not a power of 2 . The next lower power of 2 is 128, so she subtracts that from 132 and passes 4 to Richard. 4 is a power of 2, so Richard divides it by 2 and passes 2 to Louise. Likewise,2  is a power so she divides it by2  and reaches 1. She wins the game.

Update If they initially set counter to 1 , Richard wins. Louise cannot make a move so she loses.

Sample Input 0

1
6
Sample Output 0

Richard
Explanation 0

6 is not a power of 2 so Louise reduces it by the largest power of 2 less than 6:6-4=2
2 is a power of 2 so Richard divides by 2 to get 1 and wins the game.

function countergame(n){
    let turn='Louise';
    let count=0;
    let value=0;
    let i=1;
    while(n!==1){
      while(value<n){
        value=2**i;
        count=i;
        //console.log(count)
        i++;
      }
      if(value===n){
        n=parseInt(n/2); 
      }
      else{
         n=n-(2**(count-1))
         count=0;
      }
      if(n===1){
        return turn;
      }
      if(turn==="Louise"){
        turn="Richard";
      }
      else{
       turn="Louise";
      }
      //console.log(turn);
      value=0;
      i=1;
      
    }
    
  }
  console.log(countergame(132));
