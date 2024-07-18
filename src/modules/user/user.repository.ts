import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserRepository {
	constructor(private prisma: PrismaClient) {}
	find() {
		return this.prisma.user.findMany();
	}
}
