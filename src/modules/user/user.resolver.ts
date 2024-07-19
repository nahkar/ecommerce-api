import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@entities/user.entity';
import { UserService } from './user.service';
import { CreateUserArgs } from './dto/create-user.args';

@Resolver(() => User)
export class UserResolver {
	constructor(private readonly userService: UserService) {}

	@Query(() => [User])
	users() {
		return this.userService.getAllUsers();
	}

	@Mutation(() => User)
	createUser(@Args() args: CreateUserArgs) {
		return this.userService.createUser(args);
	}
}
