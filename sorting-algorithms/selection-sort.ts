function selectionSort(arr: Array<number>): Array<number>{

    const newArr = [...arr]
    let minIndex = 0
    let temp = 0

    for(let i = 0; i < newArr.length - 1; i ++){

        minIndex = i

        for(let j = i + 1; j < newArr.length; j ++){

            if(newArr[j] < newArr[minIndex]){
                minIndex = j
            }

        }

        temp = newArr[minIndex]
        newArr[minIndex] = newArr[i]
        newArr[i] = temp

    }
    
    return newArr

}

const sortedArr = selectionSort([5, 2, 1, 3, 4])
console.log(sortedArr)
/*
    [5, 2, 1, 3, 4] -> [1, 2, 3, 4, 5]
    Time Complexity = o(n^2)
*/

export {}