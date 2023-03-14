function findLargString(arr){
    let longestString = arr[0];
    if(arr.length === 0){
        return null;
    }
    else{
        for (let i = 1; i < arr.length; i++){
            if(arr[i].length > longestString.length){
                longestString = arr[i];
            }
        }
        return longestString
    }
}
console.log(findLargString(["apple", "banana", "pear", "kiwi"]))
