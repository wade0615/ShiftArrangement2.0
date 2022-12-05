import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import config from 'src/Config/config';
// import configError from 'src/Config/error.message.config';
import { SystemDao } from 'src/Dao/system.dao';
import { LoginDto, LoginResp } from 'src/Dto/Auth/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly systemDao: SystemDao,
  ) {}

  /**
   *  登入
   * @param req
   * @returns
   */
  async login(req: LoginDto): Promise<LoginResp> {
    // 判斷帳密是否符合
    // const validateUserResp = await this.validateUser(req);

    // 判斷是否還有存在的 token
    // const isTokenExist = await redisService.getCacheData(
    //   `${config.REDIS_KEY.TOKEN}:${req.act}`,
    // );

    // let token;
    // if (!isTokenExist) {
    //   // 若不存在 => 產 token
    //   const jwt = await this.getToken(req.act);

    //   token = jwt;
    // } else {
    //   // 如果存在 => 更新原本 token
    //   token = isTokenExist;
    // }

    // await redisService.setCacheUserToken(req.act, token, 2 * 60 * 60);

    // await redisService.setCacheUserInfo(
    //   {
    //     memberId: validateUserResp?.memberId,
    //     name: validateUserResp?.name,
    //     account: req.act,
    //     password: req.pwd,
    //     token,
    //   },
    //   2 * 60 * 60,
    // );

    // 更新 最後登入時間 member db
    // await this.authDao.updateMemberLatest(validateUserResp?.memberId);

    // 新增 系統歷程
    // await this.systemDao.insertHisSystemDao([
    //   {
    //     account: req?.act,
    //     device: SYSTEM_DEVICE.BACKEND,
    //     category: SYSTEM_CATEGORY.LOGIN,
    //     record: SYSTEM_RECORD.LOGIN,
    //     memberId: validateUserResp?.memberId,
    //   },
    // ]);

    // 輸出結果
    // const loginResp = this.authControllerSchema.NewLoginResp;
    // loginResp.token = token;
    // loginResp.name = validateUserResp?.name;
    const loginResp = {
      token: 'FRG3874620',
      name: 'David',
    };

    return loginResp;
  }

  /**
   * 登出
   * @param act
   * @returns
   */
  async logout(act: string): Promise<object> {
    // 新增 系統歷程
    // await this.systemService.insertHisSystem([
    //   {
    //     category: SYSTEM_CATEGORY.LOGOUT,
    //     record: SYSTEM_RECORD.LOGOUT,
    //   },
    // ]);

    // 清除快取資料
    // const keyInfo = `${config.REDIS_KEY.TOKEN}:${process.env.token}`;
    // const keyToken = `${config.REDIS_KEY.TOKEN}:${act}`;
    // await redisService.delCacheData(keyInfo);
    // await redisService.delCacheData(keyToken);

    return {};
  }
}
