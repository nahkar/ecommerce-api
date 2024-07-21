import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from '@entities/user.entity';
import { UserService } from './user.service';
import { CreateUserArgs } from './dto/create-user.args';
import { Store } from '@entities/store.entity';
import { StoreService } from 'modules/store/store.service';

@Resolver(() => User)
export class UserResolver {
	constructor(
		private readonly userService: UserService,
		private readonly storeService: StoreService,
	) {}

	@Query(() => [User])
	users() {
		return this.userService.getAllUsers();
	}

	@Query(() => User)
	user(@Args('user_id') user_id: string) {
		return this.userService.getUserById(user_id);
	}

	@ResolveField(() => [Store])
	stores(@Parent() user: User) {
		return this.storeService.getStoresByUserId(user.user_id);
	}

	@Mutation(() => User)
	createUser(@Args() args: CreateUserArgs) {
		return this.userService.createUser(args);
	}
}
