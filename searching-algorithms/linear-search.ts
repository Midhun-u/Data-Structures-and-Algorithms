function linearSearch(arr: Array<number>, target: number){

    for(let i = 0; i < arr.length; i++){

        if(arr[i] === target){
            return i
        }

    }

}

const index = linearSearch([1, 2, 3, 4, 5], 3)
console.log(index)

/*
    [1, 2, 3, 4, 5], target = 3 -> 2
    Time Complexity = o(n)
*/


export {}