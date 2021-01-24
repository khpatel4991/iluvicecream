import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Icecream } from './entities/icecream.entity';
import { IcecreamsService } from './icecreams.service';

@Controller('icecreams')
export class IcecreamsController {
  constructor(private readonly icecreamService: IcecreamsService) {}

  @Get()
  findAll(@Query() pageQuery) {
    const { limit, offset } = pageQuery;
    return this.icecreamService.findAll(offset, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.icecreamService.findOne(id);
  }

  @Post()
  createOne(@Body() body: Icecream) {
    return this.icecreamService.createOne(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Partial<Icecream>) {
    return this.icecreamService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.icecreamService.delete(id);
  }
}
