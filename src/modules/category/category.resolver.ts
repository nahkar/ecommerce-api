import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from '@entities/category.entity';
import { Store } from '@entities/store.entity';
import { StoreService } from 'modules/store/store.service';
import { CreateCategoryArgs } from './dto/create-category.args';

@Resolver(() => Category)
export class CategoryResolver {
	constructor(
		private readonly categoryService: CategoryService,
		private readonly storeService: StoreService,
	) {}

	@Query(() => [Category])
	categories() {
		return this.categoryService.getAllCategories();
	}

	@ResolveField(() => Store)
	store(@Parent() store: Store) {
		return this.storeService.getStoreById(store.store_id);
	}

	@Mutation(() => Category)
	createCategory(@Args() args: CreateCategoryArgs) {
		return this.categoryService.createCategory(args);
	}
}
