import { PipeTransform, Pipe } from '@angular/core';

import { Instruction } from './instruction.model';
import { Operation } from './operation.enum';

@Pipe({ name: 'operation' })
export class OperationPipe implements PipeTransform {
  transform(value: Instruction, ...args: any[]) {
    return `${this.translateOp(value.operator)} ${value.operand || ''}`;
  }

  private translateOp(operator: Operation): string {
    let operation = '???';

    switch (operator) {
      case (Operation.Read): operation = 'read'; break;
      case (Operation.Write): operation = 'write'; break;
      case (Operation.Load): operation = 'load'; break;
      case (Operation.Store): operation = 'store'; break;
      case (Operation.Add): operation = 'add'; break;
      case (Operation.Subtract): operation = 'subtract'; break;
      case (Operation.Divide): operation = 'divide'; break;
      case (Operation.Multiply): operation = 'multiply'; break;
      case (Operation.Branch): operation = 'branch'; break;
      case (Operation.BranchNeg): operation = 'branchneg'; break;
      case (Operation.BranchZero): operation = 'branchzero'; break;
      case (Operation.Halt): operation = 'halt'; break;
    }

    return operation;
  }
}
