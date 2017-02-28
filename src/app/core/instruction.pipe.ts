import { PipeTransform, Pipe } from '@angular/core';

import { Instruction } from './instruction.model';

@Pipe({ name: 'instruction' })
export class InstructionPipe implements PipeTransform {
  transform(value: Instruction, ...args: any[]) {
    return `${value.operator}${value.operand || '00'}`;
  }
}
