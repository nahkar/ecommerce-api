import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class StoreRepository {
	constructor(private readonly prisma: PrismaClient) {}

	find() {
		return this.prisma.store.findMany();
	}
}
