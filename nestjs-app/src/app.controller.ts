import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  private readonly logger = new Logger(AppController.name);

  @Get()
  getHello(): string {
    this.logger.log('This is a log message!');
    this.logger.error('This is an error message!!');
    return this.appService.getHello();
  }

  @Get('/json')
  getLog(): string {
    this.logger.log(JSON.stringify({ test: 'super', fast: 'nova' }));
    return this.appService.getHello();
  }
}
