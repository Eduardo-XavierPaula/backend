import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita CORS para aceitar requisições do seu frontend (ajuste a URL conforme necessário)
  app.enableCors({
    origin: 'http://localhost:3000', // Permite a origem do frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type, Authorization', // Cabeçalhos permitidos
    credentials: true, // Se você precisar de cookies ou credenciais
  });

  // Inicia o servidor na porta especificada
  await app.listen(3001); // Ou a porta que você está utilizando
}

bootstrap();
