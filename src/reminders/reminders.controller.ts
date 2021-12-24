import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { RemindersService } from './reminders.service';
import { Reminder } from './reminder.entity';

@Controller('reminders')
export class RemindersController {
    constructor(private service: RemindersService) { }

    @Get(':codeDate')
    get(@Param() params) {
        return this.service.getReminderByDateCode(params.codeDate);
    }

    @Post()
    create(@Body() reminder: Reminder) {
        return this.service.createReminder(reminder);
    }

    @Put()
    update(@Body() reminder: Reminder) {
        return this.service.updateReminder(reminder);
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.service.deleteReminder(params.id);
    }
}
