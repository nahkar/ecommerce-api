import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { CreateCategoryArgs } from './dto/create-category.args';

@Injectable()
export class CategoryService {
	constructor(private readonly categoryRepository: CategoryRepository) {}
	getAllCategories() {
		return this.categoryRepository.find();
	}

	getCategoryById(category_id: string) {
		return this.categoryRepository.findOne(category_id);
	}

	getCategoriesByStoreId(store_id: string) {
		return this.categoryRepository.findByStoreId(store_id);
	}

	createCategory(store: CreateCategoryArgs) {
		return this.categoryRepository.create(store);
	}
}
