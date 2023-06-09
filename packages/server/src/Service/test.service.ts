import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SystemDao } from 'src/Dao/system.dao';

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
    const testResp = {
      testContent: 'Hello User',
    };

    return testResp;
  }
}
