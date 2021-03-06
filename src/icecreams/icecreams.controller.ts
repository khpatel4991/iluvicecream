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
import { CreateIcecreamDto } from './dto/create-icecream.dto';
import { UpdateIcecreamDto } from './dto/update-icecream.dto';
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
  findOne(@Param('id') id: number) {
    return this.icecreamService.findOne(id);
  }

  @Post()
  createOne(@Body() body: CreateIcecreamDto) {
    return this.icecreamService.createOne(body);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body: UpdateIcecreamDto) {
    return this.icecreamService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.icecreamService.delete(id);
  }
}
