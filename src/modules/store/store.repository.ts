import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateStoreArgs } from './dto/create-store.args';

@Injectable()
export class StoreRepository {
	constructor(private readonly prisma: PrismaClient) {}

	find() {
		return this.prisma.store.findMany();
	}

	findOne(store_id: string) {
		return this.prisma.store.findUnique({ where: { store_id } });
	}

	findStoresByUserId(user_id: string) {
		return this.prisma.store.findMany({
			where: {
				user: {
					user_id,
				},
			},
		});
	}

	create({ user_id, ...store }: CreateStoreArgs) {
		return this.prisma.store.create({
			data: {
				...store,
				user: {
					connect: {
						user_id,
					},
				},
			},
		});
	}
}
