import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

 
  @Post()
  async create(@Body() createNotificationDto: CreateNotificationDto) {
    return await this.notificationsService.create(createNotificationDto);
  }


  @Get('user/:userId')
  async findNotificationsForUser(@Param('userId', ParseIntPipe) userId: number) {
    return await this.notificationsService.findNotificationsForUser(userId);
  }


  @Get()
  async findAll() {
    return await this.notificationsService.findAll();
  }

  
  @Get('report/:reportId')
  async findByReport(@Param('reportId') reportId: string) {
    return await this.notificationsService.findByReport(reportId);
  }

  
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.notificationsService.findOne(id);
  }

 
   
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNotificationDto: UpdateNotificationDto,
  ) {
    return await this.notificationsService.update(id, updateNotificationDto);
  }


  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.notificationsService.remove(id);
  }
}
