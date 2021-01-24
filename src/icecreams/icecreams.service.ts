import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIcecreamDto } from './dto/create-icecream.dto';
import { UpdateIcecreamDto } from './dto/update-icecream.dto';
import { Icecream } from './entities/icecream.entity';

@Injectable()
export class IcecreamsService {
  private icecreams: Icecream[] = [
    {
      id: 1,
      brand: 'Talenti',
      flavors: ['coconut', 'chocolate'],
      name: 'Cocunut Chocolate Gelato',
    },
  ];

  findAll(offset: string, limit: string) {
    const l = Number(limit);
    const o = Number(offset);
    if (isNaN(l) || isNaN(o)) {
      return this.icecreams;
    }
    return this.icecreams.slice(Number(offset), Number(offset) + Number(limit));
  }

  findOne(id: string) {
    const ice = this.icecreams.find((ice) => ice.id === Number(id));
    if (!ice) {
      throw new NotFoundException(`Icecream ${id} not found`);
    }
    return ice;
  }

  createOne(icecreamDto: CreateIcecreamDto) {
    return this.icecreams.push({
      ...icecreamDto,
      id: this.icecreams.length,
    });
  }

  update(id: string, updateIcecreamDto: UpdateIcecreamDto) {
    const ice = this.findOne(id);
    const idx = this.icecreams.findIndex((ice) => ice.id === Number(id));
    if (!ice) {
      throw new NotFoundException(`Icecream ${id} not found`);
    }
    this.icecreams = [
      ...this.icecreams.slice(0, idx),
      { ...ice, ...updateIcecreamDto },
      ...this.icecreams.slice(idx + 1),
    ];
    return this.icecreams;
  }

  delete(id: string) {
    const idx = this.icecreams.findIndex((ice) => ice.id === Number(id));
    return this.icecreams.splice(idx, 1);
  }
}
