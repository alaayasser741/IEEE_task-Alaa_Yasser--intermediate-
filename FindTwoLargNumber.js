function findLargNum(arr){
    if(arr.length < 2){
        return null;
    }
    else{
        
    let newArr = arr.sort().reverse();
    newArr = newArr.splice(0,2)
    return newArr;    
    }
}
console.log(findLargNum([2,4,3,5,6]))
