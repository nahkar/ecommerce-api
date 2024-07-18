import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { PrismaClient } from '@prisma/client';

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
})
export class UserModule {}
