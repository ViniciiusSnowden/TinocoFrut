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
    relatorioCompra: string

    @Column()
    relatorioVenda: string

    constructor(comprar: number, vender: number, fiscal: string, relatorioCompra: string, relatorioVenda: string){
        this.comprar = comprar;
        this.vender = vender;
        this.fiscal = fiscal;
        this.relatorioCompra = relatorioCompra;
        this.relatorioVenda = relatorioVenda;
    }

}
