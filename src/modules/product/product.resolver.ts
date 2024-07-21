import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from '@entities/product.entity';
import { CreateProductArgs } from './dto/create-product.args';
import { Category } from '@entities/category.entity';
import { CategoryService } from 'modules/category/category.service';

@Resolver(() => Product)
export class ProductResolver {
	constructor(
		private readonly productService: ProductService,
		private readonly categoryService: CategoryService,
	) {}
	@Query(() => [Product])
	products() {
		return this.productService.getAllProducts();
	}

	@Query(() => Product)
	product(@Args('product_id') product_id: string) {
		return this.productService.getProductById(product_id);
	}

	@ResolveField(() => Category)
	category(@Parent() product: Product) {
		return this.categoryService.getCategoryById(product.category_id);
	}

	@Mutation(() => Product)
	createProduct(@Args() args: CreateProductArgs) {
		return this.productService.createProduct(args);
	}
}
