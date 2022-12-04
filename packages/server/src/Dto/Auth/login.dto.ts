import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 20)
  act: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 20)
  pwd: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(6) // 套件為4碼
  veriCode: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  eventCode: string;
}

export class LoginResp {
  name: string;
  token: string;
}
