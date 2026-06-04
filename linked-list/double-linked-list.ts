interface NodeType {
    value: number
    next: NodeType | null
    previous: NodeType | null
}

class DoublyLinkedListNode implements NodeType {

    value: number
    next: NodeType | null
    previous: NodeType | null

    constructor(value: number) {
        this.value = value
        this.next = null
        this.previous = null
    }

}

class DoublyLinkedList {

    head: NodeType | null
    tail: NodeType | null
    private size: number = 0

    constructor() {
        this.head = null
        this.tail = null
    }

    private incrementSize(value: number){
        this.size = this.size + value
    }

    get getSize(){
        return this.size
    }

    appendValue(value: number) {

        const newNode = new DoublyLinkedListNode(value)

        if (!this.head) {

            this.head = newNode
            this.tail = newNode

            this.incrementSize(1)

            return
        }

        if (!this.head.next) {

            this.head.next = newNode
            this.tail = newNode
            this.tail.previous = this.head

            this.incrementSize(1)

            return
        }

        if (this.tail) {

            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode

            this.incrementSize(1)

        }

    }

    printNextValues() {

        if (!this.head) return null

        let current: NodeType | null = this.head
        const values: Array<number> = []

        while (current && typeof current.value === "number") {

            values.push(current.value)

            current = current.next

        }

        console.log(values.join(" -> "))

    }

    printPreviousValues() {

        if (!this.tail) return null

        let current: NodeType | null = this.tail
        const values: Array<number> = []

        while (current && typeof current.value === "number") {

            values.push(current.value)

            current = current.previous
        }

        console.log(values.join(" -> "))

    }

    prependValue(value: number) {

        const newNode = new DoublyLinkedListNode(value)

        if (!this.head) {

            this.head = newNode
            this.tail = newNode

            this.incrementSize(1)

            return
        }

        this.head.previous = newNode
        this.head.previous.next = this.head
        this.head = newNode

        this.incrementSize(1)


    }

    search(value: number) {

        if (!this.head || !this.tail) return null

        if (this.head.value === value) return this.head

        if (this.tail.value === value) return this.tail

        let current: NodeType | null = this.head

        while (current && typeof current.value === "number") {

            if (current.value === value) return current

            current = current.next

        }

    }

    insertAt(value: number, index: number) {

        if(index >= this.size){
            throw new Error('Range out of linked list')
        }

        const newNode = new DoublyLinkedListNode(value)

        if (!this.head || !this.tail) {

            this.head = newNode
            this.tail = newNode

            this.incrementSize(1)

            return

        }

        if(index === 0){

            newNode.next = this.head
            this.head.previous = newNode
            this.head = newNode

            this.incrementSize(1)

            return

        }

        if(index === this.size - 1){

            this.tail.previous? this.tail.previous.next = newNode: null
            newNode.previous = this.tail.previous
            newNode.next = this.tail

            this.incrementSize(1)

            return

        }

        // 0 -> 1 -> 2 -> 5 -> 3 -> 4
        
        let position: number = 0
        let current = this.head.next

        while(current && current.next && position < index - 2){
            current = current.next
            position++
        }

        if(current){

            const nextNode = current.next as NodeType
            current.next = newNode as NodeType
            newNode.next = nextNode
            newNode.previous = current
            nextNode.previous = newNode

            this.incrementSize(1)

        }

        return

    }

    delete(value: number){

        if(!this.head || !this.tail) return

        if(this.head.value === value && this.head.next){
    
            this.head = this.head.next
            this.head.previous = null

            this.incrementSize(-1)
            
            return

        }

        if(this.head.value == value && !this.head.next){

            this.head = null
            this.tail = null

            this.incrementSize(-1)

            return

        }

        if(this.tail.value === value){

            this.tail = this.tail.previous as NodeType
            this.tail.next = null

            return

        }

        let current = this.head.next

        while(current && current.value){

            if(current.value === value){

                current.previous = current.next? current.next.next: null
                this.incrementSize(-1)

                return

            }

            current = current.next

        }

    }

}

const doublyLinkedList = new DoublyLinkedList()

// Append
doublyLinkedList.appendValue(1)
doublyLinkedList.appendValue(2)
doublyLinkedList.appendValue(3)
doublyLinkedList.appendValue(4)

// Prepend
doublyLinkedList.prependValue(0)

// Insert at
doublyLinkedList.insertAt(5, 3)

// Delete
doublyLinkedList.delete(4)

// Print next values
doublyLinkedList.printNextValues()

// Print previous values
doublyLinkedList.printPreviousValues()

// Search
const nodeOne = doublyLinkedList.search(1)
const nodeTwo = doublyLinkedList.search(2)

export {}