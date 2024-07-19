import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Category {
	@Field(() => ID)
	category_id: string;
	@Field()
	name: string;
}
