import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilers } from './all-exceptions.filters';
//import { MyLoggerService } from './my-logger/my-logger.service';
//import corsOptions from './config/corsOptions';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule,{
  //   //logger: ['error', 'warn'],
  //   //logger: false,
  //   bufferLogs: true,
  // });

  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);

  app.useGlobalFilters(new AllExceptionsFilers(httpAdapter));
  //app.useLogger(app.get(MyLoggerService));
  app.setGlobalPrefix('api');
  //app.enableCors(corsOptions);
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
