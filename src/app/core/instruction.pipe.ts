import { PipeTransform, Pipe } from '@angular/core';

import { Instruction } from './instruction.model';
import { Operation } from './operation.enum';
import { LeftPadPipe } from './left-pad.pipe';

@Pipe({ name: 'instruction' })
export class InstructionPipe implements PipeTransform {
  private maxOpLength = 10;
  private operandLength = 2;

  constructor(private leftPadPipe: LeftPadPipe) { }

  transform(value: Instruction, ...args: any[]) {
    const opcode = this.translateOp(value.operator);
    const operand = this.leftPadPipe.transform(
      value.operand, this.operandLength, '0'
    );

    return `${opcode} ${operand}`;
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
