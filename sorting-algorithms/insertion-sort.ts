function insertionSort(arr: Array<number>): Array<number>{

    const newArr = [...arr]
    
    for(let i = 1; i < newArr.length; i ++){

        let current = newArr[i]
        let j = i - 1

        while(j >= 0 && current < newArr[j]){
            newArr[j + 1] = newArr[j]
            j--
        }

        newArr[j + 1] = current

    }

    return newArr

}

const sortedArr = insertionSort([5, 2, 1, 3, 4])
console.log(sortedArr)
/*
    [5, 2, 1, 3, 4] -> [1, 2, 3, 4, 5]
    Time Complexity = o(n^2)
*/

export {}