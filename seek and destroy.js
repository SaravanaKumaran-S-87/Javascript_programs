function destroyer(arr,...arg) {
    return arr.filter(item=> !arg.includes(item));
  }
  
  console.log(destroyer());