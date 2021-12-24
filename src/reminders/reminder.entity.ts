import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reminder {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dateCode:string;

    @Column({ length: 30 })
    title:string;

    @Column()
    fromTime:string;

    @Column()
    toTime:string;

    @Column()
    city:string;
}
