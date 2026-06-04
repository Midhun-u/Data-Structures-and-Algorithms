class Stack<Type> {

    private items: Array<Type> = []

    push(value: Type) {
        this.items.push(value)
    }

    pop() {

        if (!this.items.length) throw new Error("There is no elements in the stack")

        this.items.pop()

    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    print() {
        console.log(this.items)
    }

    getSize(){
        return this.items.length
    }

}

const stack = new Stack<number>()

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
console.log("Peek Value: ", peekValue)

// Empty
console.log("Empty: ", stack.isEmpty())

// Print
stack.print()

export { }