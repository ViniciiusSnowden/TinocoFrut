import { Entity, PrimaryGeneratedColumn, Column  } from "typeorm"

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    tipo: string;

    constructor(nome: string, email: string, tipo: string){
        this.nome = nome;
        this.email = email;
        this.tipo = tipo;
    }

}
