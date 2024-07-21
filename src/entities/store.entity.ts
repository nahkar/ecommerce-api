import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType()
export class Store {
	@Field(() => ID)
	store_id: string;
	@Field()
	name: string;
	@Field()
	address: string;
	@Field({ nullable: true })
	logo: string;
	@Field(() => User, { nullable: true })
	store: User;
}
