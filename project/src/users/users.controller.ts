import { Body, Controller, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { check } from './DTO/check.dto';


@Controller('users')
export class UsersController {
     constructor(private readonly userService: UsersService) {}

     @Get()
     @UsePipes(ValidationPipe)
     getAbd(@Body() ab:check)
     {
        return ab
     }
     

    }
