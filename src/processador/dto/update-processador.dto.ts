import { PartialType } from '@nestjs/mapped-types';
import { CreateProcessadorDto } from './create-processador.dto';

export class UpdateProcessadorDto extends PartialType(CreateProcessadorDto) {
  id: number;
}
