console.log("helo")
   // qution number 1   Function (3,4) return max value
var greater=0;
function max(val1,val2) {
    if(val1>val2){
        return val1;
    }
else{
    return val2;
}
}
var temp=max(3,4);
console.log(temp);

// qution number 2 Function (array) 
//return multiply 2 in each value

function multiply2ToEach(arr)
  {
    var i = 0;
    while(i < arr.length) 
    { 
      arr[i] = arr[i] * 2;
      i++; 
    }
    return arr;
  }
  
  var a = [2, 4, 6, 8];
  var temp = multiply2ToEach(a);
  console.log(temp);

  // qution number 3 

  function maxMin(arr)
  {
    var i = 0, min = arr[0], max = arr[0];
    while(i < arr.length)
    {
      if(arr[i] < min) min = arr[i];
       if(arr[i] > max) max = arr[i];
       i++;
    }
    console.log("Max is:" + max)
    return min;
  }
  
  var a = [2, 4, 6, 8];
  var temp = maxMin(a);
  console.log("Min is:" + temp);