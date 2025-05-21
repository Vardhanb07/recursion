//itrative solution 
function fibs(n){
    if(n == 0){
        return []
    }else if(n == 1){
        return [0]
    }
    if(n < 0){
        return -1
    }
    let a  = [0,1]
    for(let i = 0; i < n - 2; i++){
        a.push(a[i] + a[i + 1])
    }
    return a
}
console.log(fibs(8))
console.log(fibs(-1))
//recursive solution
function fibsRec(n){ 
    if(n == 0){
        return []
    }else if(n == 1){
        return [0]
    }
    if(n < 0){
        return -1
    }
    if(n == 2){
        return [0,1]
    }
    let x = fibsRec(n - 1)
    x.push(x[x.length - 1] + x[x.length - 2])
    return x
}
console.log(fibsRec(8))
console.log(fibsRec(-1))