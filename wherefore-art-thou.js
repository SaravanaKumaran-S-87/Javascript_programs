function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
    let sourcearr=[source];
    console.log(sourcearr)
    let namearr=[];
    for(let s in source){
      namearr.push(s)
    }
    console.log(namearr);
    let count=0;
    for(let i=0;i<collection.length;i++){
      for(let j=0;j<namearr.length;j++){
        if(collection[i][namearr[j]]===source[namearr[j]]){  
         count++;
        };
          
      } 
      console.log(count)
      if(count===namearr.length){
        arr.push(collection[i]);
      }
      
       count=0;
      
    }
  
    // Only change code above this line
    return arr;
  }
  
  console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
  
  /*const ratings = watchList.map(user=>({"title":user.Title,"rating":user.imdbRating}));
  console.log(ratings[0]["title"])
  
  
  // Only change code above this line
  
  console.log(JSON.stringify(ratings));*/
  