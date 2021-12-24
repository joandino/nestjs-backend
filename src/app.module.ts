import { Module } from '@nestjs/common';
import { RemindersModule } from './reminders/reminders.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    RemindersModule
  ],
})
export class AppModule { }
