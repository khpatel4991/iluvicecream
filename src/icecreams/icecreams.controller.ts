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

@Controller('icecreams')
export class IcecreamsController {
  @Get()
  findAll(@Query() pageQuery) {
    const { limit, offset } = pageQuery;
    return `This action returns icecreams limit by ${limit} and offset from ${offset}.`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns ${id} icecreams.`;
  }

  @Post()
  createOne(@Body('name') name: string) {
    return `${name} created`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Updated ${id} with new body ${JSON.stringify(body)}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Deleted resource ${id}`;
  }
}
