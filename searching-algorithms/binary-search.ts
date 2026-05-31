function binarySearch(arr: Array<number>, target: number){

    let left = 0;
    let right = arr.length - 1
    
    while(left <= right){
        
        const middle = Math.floor((left + right) / 2)

        if(arr[middle] === target) return middle

        if(arr[middle] < target){
            left = middle + 1
        }else if(arr[middle] > target){
            right = middle - 1
        }

    }

    return -1

}

const index = binarySearch([1, 2, 3, 4, 5], 4)
console.log(index)

/*
    [1, 2, 3, 4, 5], target = 4 -> 3
    Time Complexity = o(log n)
*/

export {}