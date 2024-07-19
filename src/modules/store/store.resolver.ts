import { Store } from '@entities/store.entity';
import { Query, Resolver } from '@nestjs/graphql';
import { StoreService } from './store.service';

@Resolver(() => Store)
export class StoreResolver {
	constructor(private readonly storeService: StoreService) {}

	@Query(() => [Store])
	stores() {
		return this.storeService.getAllStores();
	}
}
