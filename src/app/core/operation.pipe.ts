import { PipeTransform, Pipe } from '@angular/core';

import { Instruction } from './instruction.model';

@Pipe({ name: 'operation' })
export class OperationPipe implements PipeTransform {
  transform(value: Instruction, ...args: any[]) {
    return `${this.translateOp(value.operator)} ${value.operand || ''}`;
  }

  private translateOp(operator: number): string {
    let operation = '???';

    switch (operator) {
      case (20): operation = 'read'; break;
      case (21): operation = 'write'; break;
      case (30): operation = 'load'; break;
      case (31): operation = 'store'; break;
      case (40): operation = 'add'; break;
      case (41): operation = 'subtr'; break;
      case (42): operation = 'div'; break;
      case (43): operation = 'mult'; break;
      case (50): operation = 'branch'; break;
      case (51): operation = 'brneg'; break;
      case (52): operation = 'brzero'; break;
      case (53): operation = 'halt'; break;
    }

    return operation;
  }
}
