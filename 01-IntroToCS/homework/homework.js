'use strict';

function BinarioADecimal(num) {
   var decimal=0;
   for (let i=0; i<num.length;i++){
      decimal=decimal+num[i]*2**(num.length-i-1);
   }
   return decimal;
   
}

function DecimalABinario(num) {
   
   var binario='';
   while(num!==0){
      binario= (num%2)+binario;
      num=Math.floor(num/2);
   }
   return binario;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};//no
class BinarioADecimal {
   constructor(num) {
      this.num = num;
   }
   getDecimal() {
      var decimal=0;
      for (let i=0; i<this.num.length;i++){
         decimal=decimal+this.num[i]*2**(this.num.length-i-1);
      }
      return decimal;
   }
}

