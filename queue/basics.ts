interface NodeType<Type>{
    value: Type
    next: NodeType<Type> | null
}

class LinkedListNode<Type> implements NodeType<Type>{
    value: Type
    next: NodeType<Type> | null

    constructor(value: Type){
        this.value = value
        this.next = null
    }
}

class Queue<Type>{

    private head: NodeType<Type> | null
    private tail: NodeType<Type> | null
    private length: number = 0

    constructor(){
        this.head = null
        this.tail = null
    }

    private incrementLength(){
        this.length = this.length + 1
    }

    private decrementLength(){
        this.length = this.length - 1
    }

    enqueue(value: Type){

        const newNode = new LinkedListNode(value)

        if(!this.head || !this.tail){

            this.head = newNode
            this.tail = newNode

            this.incrementLength()

            return

        }

        if(!this.head.next){

            this.head.next = newNode
            this.tail = newNode

            this.incrementLength()

            return

        }

        this.tail.next = newNode
        this.tail = newNode

        this.incrementLength()

    }

    dequeue(){

        if(!this.head) throw new Error('Queue is empty')

        this.head = this.head.next
        this.decrementLength()

    }

    getSize(){
        return this.length
    }

    isEmpty(){
        return this.length === 0
    }

    printValues(){

        const values = []

        let current = this.head

        while(current && current.value){

            values.push(current.value)
            current = current.next

        }

        console.log(values)

    }

}

const queue = new Queue()

// Enqueue
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)

// Dequeue
queue.dequeue()
queue.dequeue()

// Length
const size = queue.getSize()

// Empty
const isEmpty = queue.isEmpty()
console.log(isEmpty)

queue.printValues()