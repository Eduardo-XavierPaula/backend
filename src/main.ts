import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ImATeapotException } from '@nestjs/common/exceptions';

const whitelist = [
  'https://frontend-omega-three-68.vercel.app',
  'http://localhost:3000',
];

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
      origin: function (origin, callback) {
        if (!origin) {
          callback(null, true);
          return;
        }
        if (
          whitelist.includes(origin) || // Checks your whitelist
          !!origin.match(/yourdomain\.com$/) // Overall check for your domain
        ) {
          console.log('allowed cors for:', origin);
          callback(null, true);
        } else {
          console.log('blocked cors for:', origin);
          callback(new ImATeapotException('Not allowed by CORS'), false);
        }
      },
    },
  });

  await app.listen(3001); // Ou a porta que você está utilizando
}

bootstrap();
