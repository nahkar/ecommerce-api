import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType()
export class Store {
	@Field(() => ID)
	store_id: string;
	@Field()
	name: string;
	@Field({ nullable: true })
	address?: string;
	@Field({ nullable: true })
	logo?: string;
	@Field(() => User)
	user: User;
	@Field(() => ID)
	user_id: string;
}
