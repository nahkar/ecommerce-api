import { Store } from '@entities/store.entity';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { StoreService } from './store.service';
import { CreateStoreArgs } from './dto/create-store.args';
import { User } from '@entities/user.entity';
import { UserService } from 'modules/user/user.service';

@Resolver(() => Store)
export class StoreResolver {
	constructor(
		private readonly storeService: StoreService,
		private readonly userService: UserService,
	) {}

	@Query(() => [Store])
	stores() {
		return this.storeService.getAllStores();
	}

	@ResolveField(() => User)
	user(@Parent() store: Store) {
		return this.userService.getUserById(store.user_id);
	}

	@Mutation(() => Store)
	createStore(@Args() args: CreateStoreArgs) {
		return this.storeService.createStore(args);
	}
}
