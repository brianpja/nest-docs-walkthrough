import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateDogDto } from './create-dogs.dto';

@Controller('dogs')
export class DogsController {
  // async example. must always return a promise. can also return rxjs observable
  @Get()
  async findAll(): Promise<any[]> {
    return [];
  }

  @Post()
  async create(@Body() createDogDto: CreateDogDto): Promise<string> {
    console.log(createDogDto);
    return 'this action creates a new dog';
  }
}
