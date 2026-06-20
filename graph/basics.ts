class Graph{

    private map: Map<number, Array<number>>

    constructor(){
        this.map = new Map<number, Array<number>>()
    }

    private addVertex(vertex: number){
        this.map.set(vertex, [])
    }

    insert(vertex: number, edge: number, isBidirectional: boolean){

        if(!this.map.has(vertex)){
            this.addVertex(vertex)
        }

        if(!this.map.has(edge)){
            this.addVertex(edge)
        }

        this.map.get(vertex)?.push(edge)


        if(isBidirectional){
            this.map.get(edge)?.push(vertex)
        }

    }

    print(){

        for (const vertex of this.map.keys()){

            console.log(`${vertex} -> ${this.map.get(vertex)}`)

        }

    }

}

const graph = new Graph()

// Insert
graph.insert(5, 3, false)
graph.insert(7, 3, true)

// Print
graph.print()