import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

// import firebase from 'firebase';
// import config from '../config/config';

import { AppController } from './app.controller';
import { AuthController } from './Controller/auth.controller';
import { TestController } from './Controller/test.controller';

import { AuthService } from './Service/auth.service';
import { AppService } from './app.service';
import { TestService } from 'src/Service/test.service';

import { SystemDao } from 'src/Dao/system.dao';

@Module({
  imports: [],
  controllers: [AppController, AuthController, TestController],
  providers: [JwtService, AppService, AuthService, TestService, SystemDao],
})
export class AppModule {}
