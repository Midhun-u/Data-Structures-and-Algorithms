interface NodeType<Type>{
    value: Type
    previous: NodeType<Type> | null
    next: NodeType<Type> | null
}

class LinkedListNode<Type> implements NodeType<Type>{
    value: Type
    previous: NodeType<Type> | null
    next: NodeType<Type> | null

    constructor(value: Type){
        this.value = value
        this.next = null
        this.previous = null
    }

}

class LinkedListStack<Type>{

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

    push(value: Type){
        
        const newNode = new LinkedListNode<Type>(value)

        if(!this.head || !this.tail){

            this.head = newNode
            this.tail = newNode

            this.incrementLength()
            
            return

        }

        if(!this.head.next){

            this.head.next = newNode
            this.tail = newNode
            this.tail.previous = this.head

            this.incrementLength()

            return

        }
        
        let current = this.head.next

        while(current && current.next){
            current = current.next
        }

        current.next = newNode
        this.tail = newNode
        this.tail.previous = current

        this.incrementLength()

    }

    pop(){

        if(!this.length) throw new Error("There is no elements in the stack")

        if(!this.tail?.previous) return

        this.tail = this.tail.previous
        this.tail.next = null

        this.decrementLength()

    }

    peek(){
        return this.tail
    }

    isEmpty(){
        return this.length === 0
    }
    
    getSize(){
        return this.length
    }

}

const stack = new LinkedListStack<number>()

// Push
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

// Pop
stack.pop()
stack.pop()

// Peek
const peekValue = stack.peek()

// Empty
const isEmpty = stack.isEmpty()

console.log(peekValue)