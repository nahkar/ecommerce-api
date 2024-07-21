import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Store } from './store.entity';

@ObjectType()
export class Category {
	@Field(() => ID)
	category_id: string;

	@Field()
	name: string;

	@Field(() => Store)
	store: Store;
}
