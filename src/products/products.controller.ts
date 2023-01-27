import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductDto } from './dto/product.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  @Get('/')
  @ApiResponse({
    type: [ProductDto],
  })
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async fetchProducts() {}
}
