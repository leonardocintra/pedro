import { Module } from '@nestjs/common';
import { ProcessadorService } from './processador.service';

@Module({
  providers: [ProcessadorService],
})
export class ProcessadorModule { }
