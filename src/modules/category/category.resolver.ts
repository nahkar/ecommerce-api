import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from '@entities/category.entity';
import { Store } from '@entities/store.entity';
import { StoreService } from 'modules/store/store.service';
import { CreateCategoryArgs } from './dto/create-category.args';
import { ProductService } from 'modules/product/product.service';

@Resolver(() => Category)
export class CategoryResolver {
	constructor(
		private readonly categoryService: CategoryService,
		private readonly storeService: StoreService,
		private readonly productService: ProductService,
	) {}

	@Query(() => [Category])
	categories() {
		return this.categoryService.getAllCategories();
	}

	@ResolveField(() => Store)
	store(@Parent() category: Category) {
		return this.storeService.getStoreById(category.store_id);
	}

	@ResolveField(() => Store)
	products(@Parent() category: Category) {
		return this.productService.getProductsByCategoryId(category.category_id);
	}

	@Mutation(() => Category)
	createCategory(@Args() args: CreateCategoryArgs) {
		return this.categoryService.createCategory(args);
	}
}
