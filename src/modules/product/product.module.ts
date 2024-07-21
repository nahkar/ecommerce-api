import { forwardRef, Module } from '@nestjs/common';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';
import { PrismaClient } from '@prisma/client';
import { CategoryModule } from 'modules/category/category.module';

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
	imports: [forwardRef(() => CategoryModule)],
	exports: [ProductService],
})
export class ProductModule {}
