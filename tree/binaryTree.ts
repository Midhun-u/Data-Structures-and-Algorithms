interface NodeType{
    data: number
    left: NodeType | null
    right: NodeType | null
}

class TreeNode implements NodeType{
    data: number
    left: NodeType | null
    right: NodeType | null

    constructor(data: number){
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinaryTree{

    private root: NodeType | null
    private size: number

    constructor(){
        this.root = null
        this.size = 0
    }

    private incrementSize(){
        this.size += 1
    }

    insert(data: number){

        const newNode = new TreeNode(data)

        if(!this.root){

            this.root = newNode
            this.incrementSize()
            return

        }



    }

}

const binaryTree = new BinaryTree()

// Insert
binaryTree.insert(8)
binaryTree.insert(15)
binaryTree.insert(20)
binaryTree.insert(5)
binaryTree.insert(10)

export {}