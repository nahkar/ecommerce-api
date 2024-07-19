import { Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from '@entities/category.entity';

@Resolver(() => Category)
export class CategoryResolver {
	constructor(private readonly categoryService: CategoryService) {}

	@Query(() => [Category])
	categories() {
		return this.categoryService.getAllCategories();
	}
}
