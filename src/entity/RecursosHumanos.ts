import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class RecursosHumanos {

    @PrimaryGeneratedColumn()
    funcionario: string

    @Column()
    salario: number

    @Column()
    cargaHoraria: number

    @Column()
    folhaPonto: string

    @Column()
    setor: string 

    constructor(funcionario: string, salario: number, cargaHoraria: number, folhaPonto: string, setor: string){
        this.funcionario = funcionario,
        this.salario = salario,
        this.cargaHoraria = cargaHoraria,
        this.folhaPonto = folhaPonto,
        this.setor = setor
    }

}