import { ArgsType, Field, ID } from '@nestjs/graphql';
@ArgsType()
export class CreateStoreArgs {
	@Field()
	name: string;
	@Field({ nullable: true })
	address?: string;
	@Field({ nullable: true })
	logo?: string;
	@Field(() => ID)
	user_id: string;
}
