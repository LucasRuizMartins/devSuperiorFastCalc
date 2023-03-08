function sum (n1,n2, result) {
    if(result == 0) { 
       return      n1+n2 
      }
        else return n2 + result
}

function multiply (n1,n2, result) {
    if(result == 0) { 
       return n1*n2 
      }
        else return n2 * result
}


export {sum, multiply}