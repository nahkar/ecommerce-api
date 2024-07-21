import { Module, forwardRef } from '@nestjs/common';
import { StoreResolver } from './store.resolver';
import { StoreService } from './store.service';
import { StoreRepository } from './store.repository';
import { PrismaClient } from '@prisma/client';
import { UserModule } from 'modules/user/user.module';

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
	imports: [forwardRef(() => UserModule)],
	exports: [StoreService],
})
export class StoreModule {}
