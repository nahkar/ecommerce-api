import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
	@Field(() => ID)
	user_id: string;
	@Field()
	email: string;
	@Field()
	first_name: string;
	@Field()
	last_name: string;
	@Field()
	password: string;
}
