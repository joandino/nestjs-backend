import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const APP_NAME = process.env.npm_package_name;
  const APP_VERSION = process.env.npm_package_version;

  const options = new DocumentBuilder()
    .setTitle(APP_NAME)
    .setDescription('Backend with NestJS for CODE Exitos assessment')
    .setVersion(APP_VERSION)
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.port || 3000);
}
bootstrap();
