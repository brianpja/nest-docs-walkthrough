import { Controller, Get } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  // async example. must always return a promise. can also return rxjs observable
  @Get()
  async findAll(): Promise<any[]> {
    return [];
  }
}
