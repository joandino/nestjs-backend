import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { RemindersService } from './reminders.service';
import { Reminder } from './reminder.entity';
import { ApiBody, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('reminders')
@Controller('reminders')
export class RemindersController {
    constructor(private service: RemindersService) { }

    @ApiOperation({ 
        summary: 'Gets all the reminders of the specified date by dateCode'
    })
    @ApiOkResponse({
        description: 'Retrieved reminder(s) by dateCode successfully',
        type: Reminder
    })
    @ApiNotFoundResponse({ description: 'No reminder found for dateCode' })
    @ApiInternalServerErrorResponse({
        description : 'Internal server error'
    })
    @Get('/:startDateCode/:endDateCode/:ipAddress')
    @ApiParam({ name: 'ipAddress', required: true, description: 'public ip address of the computer where reminder was created', schema: { type: 'string' } })
    @ApiParam({ name: 'endDateCode', required: true, description: 'string end date code for the reminder with this format YYYYMMDD', schema: { type: 'number' } })
    @ApiParam({ name: 'startDateCode', required: true, description: 'string start date code for the reminder with this format YYYYMMDD', schema: { type: 'number' } })
    get(@Param() params) {
        return this.service.getReminderByDateCode(params.startDateCode, params.endDateCode, params.ipAddress);
    }

    @ApiOperation({ 
        summary: 'Create a reminder'
    })
    @ApiOkResponse({
        description: 'Reminder created successfully',
        type: Reminder
    })
    @ApiInternalServerErrorResponse({
        description : 'Internal server error'
    })
    @ApiBody({ type: Reminder, description: 'Reminder object structure' })
    @Post()
    create(@Body() reminder: Reminder) {
        const newReminder = this.service.createReminder(reminder);
        return newReminder;
    }

    @ApiOperation({ 
        summary: 'Update a reminder'
    })
    @ApiOkResponse({
        description: 'Reminder updated successfully',
        type: Reminder
    })
    @ApiInternalServerErrorResponse({
        description : 'Internal server error'
    })
    @Put(':id')
    update(@Body() reminder: Reminder) {
        return this.service.updateReminder(reminder);
    }

    @ApiOperation({ 
        summary: 'Delete a reminder by id'
    })
    @ApiOkResponse({
        description: 'Reminder deleted successfully',
        type: Reminder
    })
    @ApiNotFoundResponse({ description: 'No reminder found for id' })
    @ApiInternalServerErrorResponse({
        description : 'Internal server error'
    })
    @ApiParam({ name: 'id', required: true, description: 'an integer for the reminder to be deleted', schema: { type: 'integer' } })
    @Delete(':id')
    delete(@Param() params) {
        return this.service.deleteReminder(params.id);
    }
}
