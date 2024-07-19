import { Field, ID, ObjectType } from '@nestjs/graphql';

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
}
