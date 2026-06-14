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

    private decrementSize(){
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
        this.orderRecursion(this.root, "inorder")
    }

    preorder() {
        this.orderRecursion(this.root, "preorder")
    }

    postorder() {
        this.orderRecursion(this.root, "postorder")
    }

    private orderRecursion(node: NodeType | null, type: "inorder" | "preorder" | "postorder") {

        if (!node) {
            return null
        }

        if (type === "inorder") {

            this.orderRecursion(node.left, type)
            console.log(node.data)
            this.orderRecursion(node.right, type)

        }

        if (type === "preorder") {
            console.log(node.data)
            this.orderRecursion(node.left, type)
            this.orderRecursion(node.right, type)
        }

        if (type === "postorder") {
            this.orderRecursion(node.left, type)
            this.orderRecursion(node.right, type)
            console.log(node.data)
        }

    }

    remove(data: number) {

        if (!this.root) return

        this.root = this.removeRecursion(this.root, null, data)

    }

    private removeRecursion(root: NodeType | null, parentNode: NodeType | null, data: number): NodeType | null {

        if (!root) return null

        if (data < root.data) {

            this.removeRecursion(root.left, root, data)

        } else if (data > root.data) {

            this.removeRecursion(root.right, root, data)

        } else if (root.left && root.right) {

            const successor = this.findMin(root.right)

            if (successor) {

                root.data = successor
                this.removeRecursion(root.right, root, successor)

            }

        } else {
            
            if (root.left) {
                
                root = root.left
                
            } else if (root.right) {
                
                root = root.right
                
            } else {
                
                if(!parentNode) return null
                
                if(data < parentNode.data){
                    parentNode.left = null
                }else if(data > parentNode.data){
                    parentNode.right = null
                }
                
            }

        }
        
        this.decrementSize()
        return root

    }

    private findMin(root: NodeType | null): number | null {

        if (!root) return null

        if (!root.left) {
            return root.data
        }

        return this.findMin(root.left)

    }

}

const binarySearchTree = new BinarySearchTree()

// Insert
binarySearchTree.insert(10)
binarySearchTree.insert(8)
binarySearchTree.insert(9)
binarySearchTree.insert(7)

// Contains
const contain = binarySearchTree.contains(15)
console.log("Contain: ", contain)

// Remove
binarySearchTree.remove(10)

// Inorder
binarySearchTree.inorder()


export { }