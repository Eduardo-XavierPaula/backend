import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Definir configurações de CORS
  app.enableCors({
    origin: 'https://frontend-omega-three-68.vercel.app',
    methods: 'GET,POST,PUT,PATCH,DELETE',
    credentials: true,
  });

  await app.listen(3001); // Ou a porta que você está utilizando
}

bootstrap();
