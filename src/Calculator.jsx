

function add(a,b){
 let sum = a+b ;
 return sum;
}

    function sub(a,b){
    let tot = a-b ;
    return tot;
   }

   function div(a,b){
    let tot = a/b ;
    tot = tot.toFixed(2);
    return tot;
   }

   function mult(a,b){
    let tot = a*b ;
    return tot;
   }

export default add;
export {sub , div, mult,};