import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { CreateDogDto } from './create-dogs.dto';
import { Response } from 'express';

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

  // using the Response object, not recommended and must be used with care but gives more control
  @Post()
  createWithResponse(@Res() res: Response): void {
    res.status(HttpStatus.CREATED).send();
  }

  @Get('response')
  findAllWithResponse(@Res() res: Response): void {
     res.status(HttpStatus.OK).json([]);
  }
}
