import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { appPort } from './environments/config';
import { globalPrefix } from './index';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  const port = appPort || 3333;
  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

// comment on Heroku (production)
// process.on('unhandledRejection', up => { throw up })
// then intentionally left empty
bootstrap().then();
