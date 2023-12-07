const filter = (a ,f) => {
    let result = []
   for (let i = 0; i < a.length; i++) {
       if (f(a[i],i,a)){
         result.push(a[i]) 
       }
    
   }
   return result
}


const reject = (a ,f) => {
    let result = []
   for (let i = 0; i < a.length; i++) {
       if (!f(a[i],i,a)){
         result.push(a[i]) 
       }
    
   }
   return result
}

 const partition = (a ,f) => {
    let result = []
    let r = []
   
   for (let i = 0; i < a.length; i++) {
       if (f(a[i],i,a)){
         result.push(a[i]) 
       }else{
        r.push(a[i]) 
       }
    
   }
   return [result,r]
}