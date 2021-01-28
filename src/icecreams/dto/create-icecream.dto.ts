import { IsString } from 'class-validator';

export class CreateIcecreamDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly brand: string;
  @IsString({ each: true })
  readonly flavors: string[];
}
