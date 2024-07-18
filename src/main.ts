import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import configuration from '@config/configuration';

const { PORT } = configuration();

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	await app.listen(PORT, () => console.log(`Running on port ${PORT}`));
}
bootstrap();
