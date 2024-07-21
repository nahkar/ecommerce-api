import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserArgs } from './dto/create-user.args';

@Injectable()
export class UserService {
	constructor(private readonly userRepository: UserRepository) {}
	getAllUsers() {
		return this.userRepository.find();
	}

	getUserById(user_id: string) {
		return this.userRepository.findOne(user_id);
	}

	createUser(user: CreateUserArgs) {
		return this.userRepository.create(user);
	}
}
