import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SystemDao } from 'src/Dao/system.dao';

import * as admin from 'firebase-admin';

@Injectable()
export class TestService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly systemDao: SystemDao,
  ) {}

  /**
   * test
   * @param req
   * @returns
   */
  async test() {
    const firestore = new admin.firestore.Firestore();

    const fireResult = await firestore.collection('test').get();
    console.log('fireResult', fireResult);

    const testResp = {
      testContent: 'Hello User',
    };

    return testResp;
  }
}
