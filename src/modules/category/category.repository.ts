import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateCategoryArgs } from './dto/create-category.args';

@Injectable()
export class CategoryRepository {
	constructor(private readonly prisma: PrismaClient) {}

	find() {
		return this.prisma.category.findMany();
	}

	findOne(category_id: string) {
		return this.prisma.category.findUnique({ where: { category_id } });
	}

	findByStoreId(store_id: string) {
		return this.prisma.category.findMany({
			where: {
				store_id,
			},
		});
	}

	create({ store_id, ...store }: CreateCategoryArgs) {
		return this.prisma.category.create({
			data: {
				...store,
				store: {
					connect: {
						store_id,
					},
				},
			},
		});
	}
}
