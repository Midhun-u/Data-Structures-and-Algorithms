function merge(leftArr: Array<number>, rightArr: Array<number>): Array<number>{

    const sortedArr: Array<number> = []
    let i = 0
    let j = 0

    while(i < leftArr.length && j < rightArr.length){
        if(leftArr[i] < rightArr[j]){
            sortedArr.push(leftArr[i])
            i++
        }else{
            sortedArr.push(rightArr[j])
            j++
        }
    }

    return [
        ...sortedArr,
        ...leftArr.slice(i),
        ...rightArr.slice(j)
    ]

}


function mergeSort(arr: Array<number>): Array<number>{

    const newArr = [...arr]

    if(newArr.length <= 1){
        return newArr
    }

    const middle = Math.floor(newArr.length / 2)

    const left = newArr.slice(0, middle)
    const right = newArr.slice(middle)

    return merge(
        mergeSort(left),
        mergeSort(right)
    )

}

const sortedArr = mergeSort([5, 2, 1, 3, 4])
console.log(sortedArr)

/*
    [5, 2, 1, 3, 4] -> [1, 2, 3, 4, 5]
    Time Complexity = o(n*logn)
*/

export {}