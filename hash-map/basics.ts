class HashMap{

    private table: Array<Array<any>>
    private size: number

    constructor(size: number = 10){
        this.table = new Array(size).fill([])
        this.size = size
    }

    private hashKey(key: string){

        let hash = 0

        for(let i = 0; i < key.length; i ++){
            hash += key.charCodeAt(i)
        }

        return hash % this.size

    }

    set(key: string, value: unknown){

        const index = this.hashKey(key)
        const table = this.table[index]

        for (const pair of table){
            
            if(pair[0] === key){

                pair[1] = value
                return

            }

        }

        table.push([key, value])

    }

    get(key: string){

        const index = this.hashKey(key)
        const table = this.table[index]

        for (const par of table){

            if(par[0] === key){

                return par[1]

            }

        }

        return null

    }

}


const hashMap = new HashMap()

// Set
hashMap.set("name", "Midhun")
hashMap.set("place", "TVM")
hashMap.set("isDeveloper", true)

// Get
const valueOne = hashMap.get("name")
const valueTwo = hashMap.get("place")

console.log(valueOne)
console.log(valueTwo)

// [[name, Midhun], [age, 20], [place, TVM], [isDeveloper, true]]