import { PartialType } from '@nestjs/mapped-types';
import { CreateIcecreamDto } from './create-icecream.dto';

export class UpdateIcecreamDto extends PartialType(CreateIcecreamDto) {}
