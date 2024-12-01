import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Definir configurações de CORS
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://frontend-omega-three-68.vercel.app',
    ], // Suporta múltiplas origens
    methods: 'GET,POST,PUT,PATCH,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type, Authorization', // Cabeçalhos permitidos
    credentials: true, // Permitir cookies e credenciais
  });

  await app.listen(3001); // Ou a porta que você está utilizando
}

bootstrap();
