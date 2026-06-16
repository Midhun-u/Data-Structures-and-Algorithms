interface NodeType {
    data: number
    left: NodeType | null
    right: NodeType | null
}

class TreeNode implements NodeType {
    data: number
    left: NodeType | null
    right: NodeType | null

    constructor(data: number) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {

    private root: NodeType | null
    private size: number

    constructor() {
        this.root = null
        this.size = 0
    }

    private incrementSize() {
        this.size += 1
    }

    private decrementSize() {
        this.size -= 1
    }

    insert(data: number) {

        const newNode = new TreeNode(data)

        if (!this.root) {

            this.root = newNode
            this.incrementSize()
            return

        }

        let currentNode = this.root

        while (currentNode && currentNode.data) {

            if (data < currentNode.data) {

                if (!currentNode.left) {
                    currentNode.left = newNode
                    this.incrementSize()
                    return
                } else {
                    currentNode = currentNode.left
                }

            } else if (data > currentNode.data) {

                if (!currentNode.right) {
                    currentNode.right = newNode
                    this.incrementSize()
                    return
                } else {
                    currentNode = currentNode.right
                }

            }

        }

    }

    contains(data: number) {

        if (!this.root) return false

        if (this.root.data === data) return true

        let currentNode: NodeType | null = this.root

        while (currentNode) {
            if (data < currentNode.data) {
                currentNode = currentNode.left
            } else if (data > currentNode.data) {
                currentNode = currentNode.right
            } else if (currentNode.data === data) {
                return true
            }

        }

        return false

    }

    inorder() {
        this.orderHelper(this.root, "inorder")
    }

    preorder() {
        this.orderHelper(this.root, "preorder")
    }

    postorder() {
        this.orderHelper(this.root, "postorder")
    }

    private orderHelper(node: NodeType | null, type: "inorder" | "preorder" | "postorder") {

        if (!node) {
            return null
        }

        if (type === "inorder") {

            this.orderHelper(node.left, type)
            console.log(node.data)
            this.orderHelper(node.right, type)

        }

        if (type === "preorder") {
            console.log(node.data)
            this.orderHelper(node.left, type)
            this.orderHelper(node.right, type)
        }

        if (type === "postorder") {
            this.orderHelper(node.left, type)
            this.orderHelper(node.right, type)
            console.log(node.data)
        }

    }

    remove(data: number) {
        this.root = this.removeHelper(this.root, data)
    }

    private removeHelper(root: NodeType | null, data: number): NodeType | null {

        if (!root) return root

        if (data < root.data) {

            root.left = this.removeHelper(root.left, data)

        } else if (data > root.data) {

            root.right = this.removeHelper(root.right, data)

        } else {

            if (!root.left && !root.right) {
                root = null
            } else if (root.right) {
                root.data = this.successor(root)
                root.right = this.removeHelper(root.right, root.data)
            } else if (root.left) {
                root.data = this.predecessor(root.left)
                root.left = this.removeHelper(root.left, root.data)
            }

        }

        return root

    }

    private successor(root: NodeType) {

        let node = root.right
        if (!node) return 0

        while (node.left) {
            node = node.left
        }

        return node.data

    }

    private predecessor(root: NodeType) {

        let node = root.left
        if (!node) return 0

        while (node.right) {
            node = node.right
        }

        return node.data

    }

    getSize() {
        return this.size
    }

}

const binarySearchTree = new BinarySearchTree()

// Insert
binarySearchTree.insert(50)
binarySearchTree.insert(30)
binarySearchTree.insert(70)
binarySearchTree.insert(20)
binarySearchTree.insert(40)
binarySearchTree.insert(60)
binarySearchTree.insert(80)

// Contains
const contain = binarySearchTree.contains(15)
console.log("Contain: ", contain)

// Remove
binarySearchTree.remove(70)

// Inorder
binarySearchTree.inorder()

// Size
const size = binarySearchTree.getSize()
console.log("Size: ", size)

export { }