import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reminder {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    dateCode:string;

    @ApiProperty()
    @Column({ length: 30 })
    title:string;

    @ApiProperty()
    @Column()
    fromTime:string;

    @ApiProperty()
    @Column()
    toTime:string;

    @ApiProperty()
    @Column()
    city:string;

    @ApiProperty()
    @Column()
    ipAddress:string;
}
