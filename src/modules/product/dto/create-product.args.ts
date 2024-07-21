import { ArgsType, Field, ID } from '@nestjs/graphql';
@ArgsType()
export class CreateProductArgs {
	@Field()
	name: string;
	@Field(() => ID)
	category_id: string;
}
