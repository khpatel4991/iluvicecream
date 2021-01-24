import { Injectable } from '@nestjs/common';
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
    return this.icecreams.find((ice) => ice.id === Number(id));
  }

  createOne(icecreamDto: Icecream) {
    return this.icecreams.push(icecreamDto);
  }

  update(id: string, updateIcecreamDto: Partial<Icecream>) {
    const ice = this.findOne(id);
    const idx = this.icecreams.findIndex((ice) => ice.id === Number(id));
    if (!ice) {
      throw new Error(`Can't find id ${id}`);
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