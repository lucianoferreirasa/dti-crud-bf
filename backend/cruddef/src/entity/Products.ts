import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'


@Entity()
export class Products {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    amount: number;
    
    @Column()
    cost: number;

}