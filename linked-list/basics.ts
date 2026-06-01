interface NodeType{
    value: number
    next: NodeType | null
}

class LinkedListNode implements NodeType{

    value: number
    next: NodeType | null

    constructor(value: number){
        this.value = value
        this.next = null
    }

}

class LinkedList{

    head: NodeType | null
    tail: NodeType | null

    constructor(){
        this.head = null
        this.tail = null
    }

    appendValue(value: number){

        const newNode = new LinkedListNode(value)
        
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            return
        }

        if(this.tail){
            this.tail.next = newNode
            this.tail = newNode
        }

    }

    printValues(){

        let current = this.head
        const values: Array<number> = []

        while(current){
            values.push(current.value)
            current = current.next
        }

        console.log(values.join(" -> "))

    }

    prependValue(value: number){

        const newNode = new LinkedListNode(value)

        newNode.next = this.head
        this.head = newNode

    }

    search(value: number){

        let current = this.head

        while(current){

            if(current.value === value){
                return current
            }

            current = current.next

        }

        return null

    }

    delete(value: number){

        if(!this.head) return

        if(this.head.value === value){
            this.head = this.head.next
            return
        }

        let current = this.head

        while(current.next && current.next.value !== value){
            current = current.next
        }

        if(current.next){
            current.next = current.next.next
            this.tail = current
        }

    }

}

const linkedList = new LinkedList()

// Append
linkedList.appendValue(1)
linkedList.appendValue(2)
linkedList.appendValue(3)

// Prepend
linkedList.prependValue(0)
linkedList.prependValue(-1)
linkedList.prependValue(-2)

// Search
const nodeOne = linkedList.search(1)
const nodeTwo = linkedList.search(2)

// Delete
linkedList.delete(3)

linkedList.printValues()