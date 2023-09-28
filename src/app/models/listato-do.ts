export class ListaToDo {
    id?: number
    nome?: string  
    icone: string = 'list'
    constructor(id: number, nome: string, icone: string = "list") {
        this.id = id
        this.nome = nome
        this.icone = icone
    }
    // public static fromObject(object: any) {
    //     const lista = new ListaToDo()
    //     lista.id = object.id
    //     lista.nome = object.nome
    //     lista.icone = object.icone ? object.icone : 'list' 
    //     return lista        
    // }
}