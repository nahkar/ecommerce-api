import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserArgs } from './dto/create-user.args';

@Injectable()
export class UserRepository {
	constructor(private readonly prisma: PrismaClient) {}
	find() {
		return this.prisma.user.findMany();
	}

	findOne(user_id: string) {
		return this.prisma.user.findUnique({ where: { user_id } });
	}

	create(user: CreateUserArgs) {
		return this.prisma.user.create({ data: user });
	}
}
