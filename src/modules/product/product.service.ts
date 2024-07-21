import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductArgs } from './dto/create-product.args';

@Injectable()
export class ProductService {
	constructor(private readonly productRepository: ProductRepository) {}
	getAllProducts() {
		return this.productRepository.find();
	}

	getProductById(product_id: string) {
		return this.productRepository.findOne(product_id);
	}

	getProductsByCategoryId(category_id: string) {
		return this.productRepository.findByCategoryId(category_id);
	}

	createProduct(product: CreateProductArgs) {
		return this.productRepository.create(product);
	}
}
