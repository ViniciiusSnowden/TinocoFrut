import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    email: string

    constructor(nome: string, email: string){
        this.nome = nome;
        this.email = email;
    }

}
