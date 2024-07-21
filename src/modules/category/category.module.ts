import { forwardRef, Module } from '@nestjs/common';
import { CategoryResolver } from './category.resolver';
import { CategoryService } from './category.service';
import { CategoryRepository } from './category.repository';
import { PrismaClient } from '@prisma/client';
import { StoreModule } from 'modules/store/store.module';
import { ProductModule } from 'modules/product/product.module';

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
	exports: [CategoryService],
	imports: [forwardRef(() => StoreModule), forwardRef(() => ProductModule)],
})
export class CategoryModule {}
