import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AuthController } from './Controller/auth.controller';
import { AuthService } from './Service/auth.service';
import { AppService } from './app.service';
import { SystemDao } from 'src/Dao/system.dao';

@Module({
  imports: [],
  controllers: [AppController, AuthController],
  providers: [JwtService, AppService, AuthService, SystemDao],
})
export class AppModule {}
