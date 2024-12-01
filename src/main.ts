import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const allowedOrigins = [
    'http://localhost:3000', // Primeira URL permitida
    'https://frontend-omega-three-68.vercel.app', // Segunda URL permitida
  ];
  // Definir configurações de CORS
  app.enableCors({
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true); // Permite a requisição
      } else {
        callback(new Error('Origin not allowed by CORS')); // Rejeita a requisição
      }
    },
    methods: 'GET,POST,PUT,PATCH,DELETE',
    credentials: true,
  });

  await app.listen(3001); // Ou a porta que você está utilizando
}

bootstrap();
