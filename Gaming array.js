function gamingarray(arr){
    let value="BOB";
    let current=0;
    let highest=0;
       while(arr.length!==0){
         for(let i=0;i<arr.length;i++){
           current=arr[i]
           if(current>highest){
                 highest=current;
           }
         }
         arr.splice(arr.indexOf(highest),);
         highest=0;
         if(arr.length===0){
           return value;
         }
         if(value==="BOB"){
           value="ANDY";
         }
         else if(value ==="ANDY"){
            value="BOB";
         }
       }
    }
    console.log(gamingarray(arr));
    