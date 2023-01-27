import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty({
    type: 'integer',
  })
  age: number;
  @ApiProperty()
  name: string;

  constructor({ age, name }: ProductDto) {
    this.age = age;
    this.name = name;
  }
}
