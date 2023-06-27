import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Produto {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    descricao: string

    @Column()
    preco: number

    @Column()
    categoria: string

    @Column()
    tipo: string

    @Column()
    quantidadeEstoque: number

    constructor(nome: string, descricao: string, preco: number, categoria: string, tipo: string, quantidadeEstoque: number){
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.categoria = categoria;
        this.tipo = tipo;
        this.quantidadeEstoque = quantidadeEstoque;
    }

}