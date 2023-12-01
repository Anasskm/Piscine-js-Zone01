function slice(a,b,c){
    var r = [];
    if (!b && !c){
        return a;
    }else{
        if (!c){
            if (b<0){b=a.length+b}
            if (b>=0){
            for (let i=b;i<a.length;i++){
                r.push(a[i]);
            }
        }else {
            for (let i=a.length-b;i<a.length;i++){
                r.push(a[i]);
            }
        }
        }else{
            if (b<0){b=a.length+b}
            if (c<0){c=a.length+c}
            if (b<c){
            for (let i=b;i<c;i++){
                r.push(a[i]);
            }
        }
        }
    }
    if (typeof a === 'string'){
        var s =""
        for (let i=0;i<r.length;i++){
            s= s+r[i];
        }
        return s
    }else{return r}
}