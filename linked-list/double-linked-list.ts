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
    size: number = 0

    constructor() {
        this.head = null
        this.tail = null
    }

    appendValue(value: number) {

        const newNode = new DoublyLinkedListNode(value)

        if (!this.head) {

            this.head = newNode
            this.tail = newNode

            this.size = this.size + 1

            return
        }

        if (!this.head.next) {

            this.head.next = newNode
            this.tail = newNode
            this.tail.previous = this.head

            this.size = this.size + 1

            return
        }

        if (this.tail) {

            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode

            this.size = this.size + 1

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

            this.size = this.size + 1

            return
        }

        this.head.previous = newNode
        this.head.previous.next = this.head
        this.head = newNode

        this.size = this.size + 1


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

        if (!this.head) {

            this.head = newNode
            this.tail = newNode

            this.size = this.size + 1

        }

        if(index === 0){

            newNode.next = this.head
            this.head.previous = newNode
            this.head = newNode

            this.size = this.size + 1

            return

        }

        if(index === this.size - 1){

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

// Print next values
doublyLinkedList.printNextValues()

// Print previous values
doublyLinkedList.printPreviousValues()

// Search
const nodeOne = doublyLinkedList.search(1)
const nodeTwo = doublyLinkedList.search(2)