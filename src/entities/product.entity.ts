import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Category } from './category.entity';

@ObjectType()
export class Product {
	@Field(() => ID)
	product_id: string;
	@Field()
	name: string;
	@Field(() => Category)
	category: Category;
	@Field(() => ID)
	category_id: string;
}
