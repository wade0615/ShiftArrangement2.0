import { Module } from '@nestjs/common';
import { GlobalDTOValidationPipe } from 'src/Global/global.dto.validation.pipe';

@Module({
  providers: [GlobalDTOValidationPipe],
})
export class SharedModule {}
