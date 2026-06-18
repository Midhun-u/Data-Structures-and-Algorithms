class MinHeap{

    private heap: Array<number> = []

    constructor(arr: Array<number> = []){

        this.heap = arr

    }

    insert(data: number){

        this.heap.push(data)
        this.heapifyUp()

    }

    private heapifyUp(){

        let index = this.heap.length - 1
        
        while(index > 0){

            const parentIndex = Math.round((index - 1) / 2) // Equation for finding parent of a child
            
            if(this.heap[parentIndex] < this.heap[index]) break

            const temp = this.heap[parentIndex]
            this.heap[parentIndex] = this.heap[index]
            this.heap[index] = temp

            index = parentIndex

        }

    }

    print(){
        console.log(this.heap)
    }

    remove(data: number){

        const removeElementIndex = this.heap.findIndex(value => value === data)

        if(removeElementIndex < 0) return

        const lastElement = this.heap[this.heap.length - 1]
        this.heap[removeElementIndex] = lastElement
        this.heap.pop()

        this.heapifyDown(removeElementIndex)

    }

    private heapifyDown(index: number){
        
        const length = this.heap.length

        while(true){

            let smallest = index
            const left = 2 * index + 1
            const right = left + 1

            if(
                left < length && 
                this.heap[left] < this.heap[index]
            ){
                smallest = left
            }else if(
                right < length &&
                this.heap[right] < this.heap[index]
            ){
                smallest = right
            }

            if(smallest === index){
                break
            }

            const temp = this.heap[index]
            this.heap[index] = this.heap[smallest]
            this.heap[smallest] = temp

            index = smallest

        }

    }

}

const minHeap = new MinHeap()

// Insert
minHeap.insert(10)
minHeap.insert(20)
minHeap.insert(5)
minHeap.insert(30)
minHeap.insert(50)
minHeap.insert(1)
minHeap.insert(35)

// Remove
minHeap.remove(10)

// Print
minHeap.print()