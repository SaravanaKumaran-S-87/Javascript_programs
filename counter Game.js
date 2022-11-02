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