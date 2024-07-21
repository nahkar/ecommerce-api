import { ArgsType, Field, ID } from '@nestjs/graphql';
@ArgsType()
export class CreateCategoryArgs {
	@Field()
	name: string;
	@Field(() => ID)
	store_id: string;
}
