import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    email: string

    constructor(nome, email){
        this.nome = nome;
        this.email = email;
    }

}
