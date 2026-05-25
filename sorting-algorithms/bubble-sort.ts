function bubbleSort(arr: Array<number>): Array<number>{

    const newArr = [...arr]
    let temp = 0

    for (let i = 0; i < newArr.length; i ++){

        for (let j = 0; j < newArr.length - 1 - i; j ++){

            if(newArr[j + 1] < newArr[j]){
                temp = newArr[j + 1]
                newArr[j + 1] = newArr[j]
                newArr[j] = temp
            }

        }

    }

    return newArr

}

const sortedArr = bubbleSort([5, 1, 3, 4, 2])
console.log(sortedArr)
/*
    [5, 1, 3, 4, 2] -> [1, 2, 3, 4, 5]
    Time Complexity = o(n^2)
*/

export {}