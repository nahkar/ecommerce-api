import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CategoryRepository {
	constructor(private readonly prisma: PrismaClient) {}

	find() {
		return this.prisma.category.findMany();
	}
}
