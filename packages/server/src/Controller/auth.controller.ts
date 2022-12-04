import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import apiPath from 'src/Center/api.path';
import { LoginDto } from 'src/Dto/Auth/login.dto';
import { LogoutDto } from 'src/Dto/Auth/logout.dto';
import { GlobalDTOValidationPipe } from 'src/Global/global.dto.validation.pipe';
import { AuthService } from 'src/Service/auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * 登入
   * @param body
   * @returns
   */
  @Post(apiPath.white_auth.login)
  @UsePipes(GlobalDTOValidationPipe)
  async login(@Body() body: LoginDto) {
    const result = await this.authService.login(body);

    return result;
  }

  /**
   * 登出
   * @returns
   */
  @Post(apiPath.auth.logout)
  @UsePipes(GlobalDTOValidationPipe)
  async logout(@Body() body: LogoutDto): Promise<object> {
    const { act } = body;
    const result = await this.authService.logout(act);

    return result;
  }
}
