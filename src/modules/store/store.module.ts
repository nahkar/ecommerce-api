import { Module } from '@nestjs/common';
import { StoreResolver } from './store.resolver';
import { StoreService } from './store.service';
import { StoreRepository } from './store.repository';
import { PrismaClient } from '@prisma/client';

@Module({
	providers: [
		StoreResolver,
		StoreService,
		StoreRepository,
		{
			provide: PrismaClient,
			useValue: new PrismaClient(),
		},
	],
})
export class StoreModule {}
