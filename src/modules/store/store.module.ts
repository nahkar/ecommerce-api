import { Module, forwardRef } from '@nestjs/common';
import { StoreResolver } from './store.resolver';
import { StoreService } from './store.service';
import { StoreRepository } from './store.repository';
import { PrismaClient } from '@prisma/client';
import { UserModule } from 'modules/user/user.module';
import { CategoryModule } from 'modules/category/category.module';

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
	imports: [forwardRef(() => UserModule), forwardRef(() => CategoryModule)],
	exports: [StoreService],
})
export class StoreModule {}
