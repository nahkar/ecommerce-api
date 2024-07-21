import { Module, forwardRef } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { PrismaClient } from '@prisma/client';
import { StoreModule } from 'modules/store/store.module';

@Module({
	providers: [
		UserResolver,
		UserService,
		UserRepository,
		{
			provide: PrismaClient,
			useValue: new PrismaClient(),
		},
	],
	exports: [UserService],
	imports: [forwardRef(() => StoreModule)],
})
export class UserModule {}
