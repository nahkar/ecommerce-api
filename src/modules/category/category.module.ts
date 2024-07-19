import { Module } from '@nestjs/common';
import { CategoryResolver } from './category.resolver';
import { CategoryService } from './category.service';
import { CategoryRepository } from './category.repository';
import { PrismaClient } from '@prisma/client';

@Module({
	providers: [
		CategoryResolver,
		CategoryService,
		CategoryRepository,
		{
			provide: PrismaClient,
			useValue: new PrismaClient(),
		},
	],
})
export class CategoryModule {}
