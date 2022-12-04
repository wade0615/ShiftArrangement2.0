import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class LogoutDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 20)
  act: string;
}
