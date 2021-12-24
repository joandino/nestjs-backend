import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reminder } from './reminder.entity';

@Injectable()
export class RemindersService {
    constructor(@InjectRepository(Reminder) private reminderRepository: Repository<Reminder>) { }

    async getReminderByDateCode(_dateCode: string): Promise<Reminder[]> {
        return await this.reminderRepository.find({
            select: ["id", "dateCode", "title", "fromTime", "toTime"],
            where: [{ "dateCode" : _dateCode }]
        });
    }

    async createReminder(reminder: Reminder){
        this.reminderRepository.save(reminder);
    }

    async updateReminder(reminder: Reminder){
        this.reminderRepository.save(reminder);
    }

    async deleteReminder(reminder: Reminder){
        this.reminderRepository.delete(reminder);
    }
}
