import { Controller, Get, Post, Param, Delete, Put, Query, Body, HttpException, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    console.log(createCatDto);
    return 'This action adds a new cat';
  }
  

  @Get()
  async findAll(): Promise<Cat[]> {
    
    return this.catsService.findAll();
  }

  @Get('query')
  findAllWithQuery(@Query() query: ListAllEntities): string {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }


  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto): string {
    console.log(updateCatDto);
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `This action removes a #${id} cat`;
  }

  @Get('error')
  throwError(): void {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get('item/:index')
  // here ParseIntPipe is a pipe that checks if index is a number and throws an exception if it isn't
  findAnotherOne(@Param('index', ParseIntPipe) index: number): Cat {
    return this.catsService.findOne(index);
  }
}

