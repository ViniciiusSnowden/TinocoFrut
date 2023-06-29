import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Financeiro {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    comprar: number

    @Column()
    vender: number

    @Column()
    fiscal: string

    @Column()
    relatorio_compra: string

    @Column()
    relatorio_venda: string

    constructor(comprar: number, vender: number, fiscal: string, relatorio_compra: string, relatorio_venda: string){
        this.comprar = comprar;
        this.vender = vender;
        this.fiscal = fiscal;
        this.relatorio_compra = relatorio_compra;
        this.relatorio_venda = relatorio_venda;
    }

}
