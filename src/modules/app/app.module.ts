import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from 'modules/user/user.module';
import configuration from '@config/configuration';
import { CategoryModule } from 'modules/category/category.module';
import { ProductModule } from 'modules/product/product.module';
import { StoreModule } from 'modules/store/store.module';

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
		StoreModule,
		CategoryModule,
		ProductModule,
	],
})
export class AppModule {}
