import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Definir configurações de CORS
  app.enableCors({
    origin: [
      'http://localhost:3000/',
      'https://frontend-omega-three-68.vercel.app/',
    ],
    methods: 'GET,POST,PUT,PATCH,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });

  await app.listen(3001); // Ou a porta que você está utilizando
}

bootstrap();
