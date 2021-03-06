import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { Reminder } from './reminder.entity';

@Injectable()
export class RemindersService {
    constructor(@InjectRepository(Reminder) private reminderRepository: Repository<Reminder>) { }

    async getReminderByDateCode(_startDateCode: number, _endDateCode: number, _ipAddress: string): Promise<Reminder[]> {
        return await this.reminderRepository.find({
            select: ["id", "dateCode", "title", "fromTime", "toTime", "city", "ipAddress"],
            where: [{ "dateCode" : Between(_startDateCode, _endDateCode), "ipAddress" : _ipAddress }]
        });
    }

    async createReminder(reminder: Reminder){
        return new Promise(resolve => {
            const res = this.reminderRepository.insert(reminder)
            resolve(res);
        })
    }

    async updateReminder(reminder: Reminder){
        this.reminderRepository.save(reminder);
    }

    async deleteReminder(reminder: Reminder){
        this.reminderRepository.delete(reminder);
    }
}
