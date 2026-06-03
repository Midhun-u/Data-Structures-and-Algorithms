interface NodeType {
    value: number
    next: NodeType | null
}

class LinkedListNode implements NodeType {

    value: number
    next: NodeType | null

    constructor(value: number) {
        this.value = value
        this.next = null
    }

}

class LinkedList {

    head: NodeType | null
    tail: NodeType | null
    private size = 0

    constructor() {
        this.head = null
        this.tail = null
    }

    private incrementSize(value: number) {
        this.size = this.size + value
    }

    get getSize() {
        return this.size
    }

    appendValue(value: number) {

        const newNode = new LinkedListNode(value)

        if (!this.head) {

            this.head = newNode
            this.tail = newNode

            this.incrementSize(1)

            return
        }

        if (this.tail) {

            this.tail.next = newNode
            this.tail = newNode

            this.incrementSize(1)

        }

    }

    printValues() {

        let current = this.head
        const values: Array<number> = []

        while (current) {
            values.push(current.value)
            current = current.next
        }

        console.log(values.join(" -> "))

    }

    prependValue(value: number) {

        const newNode = new LinkedListNode(value)

        newNode.next = this.head
        this.head = newNode

        this.incrementSize(1)

    }

    search(value: number) {

        if (!this.head || !this.tail) return null

        if (this.head.value === value) return this.head

        if (this.tail.value === value) return this.tail

        let current: NodeType | null = this.head

        while (current) {

            if (current.value === value) {
                return current
            }

            current = current.next

        }

        return null

    }

    delete(value: number) {

        if (!this.head) return

        if (this.head.value === value) {

            this.head = this.head.next

            this.incrementSize(-1)

            return
        }

        let current = this.head

        while (current.next && current.next.value !== value) {
            current = current.next
        }

        if (current.next) {

            current.next = current.next.next
            this.tail = current

            this.incrementSize(-1)

        }

    }

    insertAt(value: number, index: number) {

        if(index >= this.size){
            throw new Error("Range out of linked list")
        }

        const newNode = new LinkedListNode(value)

        if (!this.head) {

            this.head = newNode
            this.tail = newNode

             this.incrementSize(1)

            return
        }

        if (index === 0) {

            newNode.next = this.head
            this.head = newNode

             this.incrementSize(1)

            return
        }

        let targetIndex = 0
        let current = this.head

        while (current.next && targetIndex < index - 1) {
            current = current.next
            targetIndex++
        }

        let previousNode = current.next
        current.next = newNode
        newNode.next = previousNode

        this.incrementSize(1)

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
linkedList.delete(-1)
linkedList.delete(-2)

// InsertAt
linkedList.insertAt(10, 0)

linkedList.printValues()

export { }