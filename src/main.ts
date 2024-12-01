import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Definir configurações de CORS
  app.enableCors({
    origin: 'https://frontend-omega-three-68.vercel.app/', // Substitua pela URL do seu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Métodos permitidos
    allowedHeaders: 'Content-Type, Authorization', // Cabeçalhos permitidos
  });

  await app.listen(3001); // Ou a porta que você está utilizando
}

bootstrap();
