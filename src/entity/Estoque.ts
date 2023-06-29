import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Estoque {

 

    @Column()
    setor: string

    @Column()
    corredor: number

    @Column()
    prateleira: number

    @Column()
    produto: string


    constructor(setor: string, corredor: number, prateleira:number , produto){
        this.setor = setor;
        this.corredor = corredor;
        this.prateleira = prateleira;
        this.produto = produto;
    }
    }
    


