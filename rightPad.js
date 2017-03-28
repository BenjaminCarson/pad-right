
"use strict";
module.exports = rightPad;

function rightPad(val, len, char){
  val = val + "";
  char = char || 0;
  char = ""+char;
  
  while(val.length < len){
      val+=char;
  }
  
  return val;
}
