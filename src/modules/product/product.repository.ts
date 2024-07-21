import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateProductArgs } from './dto/create-product.args';

@Injectable()
export class ProductRepository {
	constructor(private readonly prisma: PrismaClient) {}

	find() {
		return this.prisma.product.findMany();
	}

	findOne(product_id: string) {
		return this.prisma.product.findUnique({ where: { product_id } });
	}

	findByCategoryId(category_id: string) {
		return this.prisma.product.findMany({
			where: {
				category_id,
			},
		});
	}

	create({ category_id, ...product }: CreateProductArgs) {
		return this.prisma.product.create({
			data: {
				...product,
				category: {
					connect: {
						category_id,
					},
				},
			},
		});
	}
}
