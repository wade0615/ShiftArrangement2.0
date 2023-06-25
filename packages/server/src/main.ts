import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './Config/config';

// firebase
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set the config options
  const adminConfig: ServiceAccount = {
    projectId: config.FIREBASE.FIREBASE_PROJECT_ID,
    privateKey: config.FIREBASE.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: config.FIREBASE.FIREBASE_CLIENT_EMAIL,
  };
  // Initialize the firebase admin app
  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
    databaseURL:
      'https://test-1-82e30-default-rtdb.asia-southeast1.firebasedatabase.app',
  });

  app.enableCors();

  await app.listen(3082);
}
bootstrap();
