import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from 'modules/user/user.module';
import configuration from '@config/configuration';

const { ENV } = configuration();

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			path: '/api/graphql',
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
			playground: ENV !== 'production',
		}),
		UserModule,
	],
})
export class AppModule {}
