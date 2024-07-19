import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProductRepository {
	constructor(private readonly prisma: PrismaClient) {}

	find() {
		return this.prisma.product.findMany();
	}
}
