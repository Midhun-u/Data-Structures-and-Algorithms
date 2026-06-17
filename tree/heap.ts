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

            const parentIndex = Math.round((index - 1) / 2)
            
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

    remove(){
        
    }

}

const minHeap = new MinHeap()

// Insert
minHeap.insert(10)
minHeap.insert(20)
minHeap.insert(5)

// Print
minHeap.print()