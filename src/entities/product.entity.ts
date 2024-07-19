import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
	@Field(() => ID)
	product_id: string;
	@Field()
	name: string;
}
