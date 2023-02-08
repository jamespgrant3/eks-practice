import { Controller, Get } from '@nestjs/common';
import { AppService, User} from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getHello(): User[]{
    return this.appService.getUsers();
  }
}
