
exports.min = function min (array) {
  function compareNumbers(a, b) {
    return a - b;
  }
  if(array==null||array.length===0){ 
    return 0; 
   }
    else{ array.sort(compareNumbers);
      return array[0];}
  }

exports.max = function max (array) {
  function compareNumbers(a, b) {
    return a - b;
  }
  if(array==null||array.length===0){ 
    return 0; 
   }
    else{ array.sort(compareNumbers);
      return array[array.length-1];}
  }


exports.avg = function avg (array) {
  function compareNumbers(a, b) {
    return a - b;
  }
  if(array==null||array.length==0){  return 0;
   }
    else{   
const reducer = (accumulator, currentValue) => accumulator + currentValue;
 return ((array.reduce(reducer))/(array.length));}
  }
