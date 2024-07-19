import { Module } from '@nestjs/common';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';
import { PrismaClient } from '@prisma/client';

@Module({
	providers: [
		ProductResolver,
		ProductService,
		ProductRepository,
		{
			provide: PrismaClient,
			useValue: new PrismaClient(),
		},
	],
})
export class ProductModule {}
