function jumpSearch(arr: Array<number>, target: number){

    let start = 0
    let end = Math.floor(Math.sqrt(arr.length))

    while(start <= end && arr[end] < target){

        start = end
        end = Math.floor(Math.sqrt(arr.length)) + end

    }

    for(let i = start; i <= end; i ++){

        if(arr[i] === target){
            return i
        }

    }

    return -1

}

const index = jumpSearch([1, 2, 3, 4, 5], 4)
console.log(index)

export {}