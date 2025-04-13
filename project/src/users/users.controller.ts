import { Body, Controller, Get,Post, Param, UsePipes, ValidationPipe, Delete, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { check } from './DTO/check.dto';


@Controller('users')
export class UsersController {
     constructor(private readonly userService: UsersService) {}

     @Post()
     @UsePipes(ValidationPipe)
     saveData(@Body() data)
     {
        return  this.userService.saveData(data)
     }
     
     @Get()
     allData()
     {
        return this.userService.allData()
     }

     @Get(':id')
     getId(@Param('id')id)
     {
      return this.userService.getId(id)
     }
     @Delete('deletebyId/:id')
     deleteId(@Param('id')id)
     {
      return this.userService.deleteId(id)

     }
     @Patch('update/:id')
     updateData(@Param('id')id, @Body() data)
     {
      return this.userService.updateData(id,data)

     }

     
     
     

    }
