import { Query, Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from '@entities/product.entity';

@Resolver()
export class ProductResolver {
	constructor(private readonly productService: ProductService) {}
	@Query(() => [Product])
	product() {
		return this.productService.getAllProducts();
	}
}
