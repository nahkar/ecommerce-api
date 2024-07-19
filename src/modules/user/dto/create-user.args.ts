import { ArgsType, Field } from '@nestjs/graphql';
@ArgsType()
export class CreateUserArgs {
	@Field()
	first_name: string;
	@Field()
	last_name: string;
	@Field()
	password: string;
	@Field()
	email: string;
}
