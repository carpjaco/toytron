import { Injectable, OnInit } from '@angular/core';
import { Instruction } from './instruction.model';
import { System } from './system.model';
import { Operation } from './operation.enum';
import { AddressFactory } from './address.factory';

@Injectable()
export class InstructionFactory {
  constructor(private addressFactory: AddressFactory) { }

  create(operator: Operation, address: number): Instruction {
    const instr = <Instruction>this.addressFactory.create(operator, address);

    return this.includeOperation(instr);
  }

  private includeOperation(instr: Instruction): Instruction {
    switch (instr.operator) {
      case Operation.Read:
        instr = this.getRead(instr);
        break;
      case Operation.Write:
        instr = this.getWrite(instr);
        break;
      case Operation.Load:
        instr = this.getLoad(instr);
        break;
      case Operation.Store:
        instr = this.getStore(instr);
        break;
      case Operation.Add:
        instr = this.getAdd(instr);
        break;
      case Operation.Subtract:
        instr = this.getSubtract(instr);
        break;
      case Operation.Divide:
        instr = this.getDivide(instr);
        break;
      case Operation.Multiply:
        instr = this.getMultiply(instr);
        break;
      case Operation.Branch:
        instr = this.getBranch(instr);
        break;
      case Operation.BranchNeg:
        instr = this.getBranchNeg(instr);
        break;
      case Operation.BranchZero:
        instr = this.getBranchZero(instr);
        break;
      case Operation.Halt:
        instr = this.getHalt(instr);
        break;
    }

    return instr;
  }

  private getRead(instr: Instruction): Instruction {
    instr.execute = (system: System) => {
      system.requestInput(instr.operand);
    };

    return instr;
  }

  private getWrite(instr: Instruction): Instruction {
    instr.execute = (system: System) => {
      system.screen = system.memory.get(instr.operand).toNumber();
      system.incCounter();
    };

    return instr;
  }

  private getLoad(instr: Instruction): Instruction {
    instr.execute = (system: System) => {
      system.accumulator = system.memory.get(instr.operand).toNumber();
      system.incCounter();
    };

    return instr;
  }

  private getStore(instr: Instruction): Instruction {
    instr.execute = (system: System) => {
      system.memory.set(instr.operand, system.accumulator);
    };

    return instr;
  }

  private getAdd(instr: Instruction): Instruction {
    instr.execute = (system: System) => {
      system.accumulator += system.memory.get(instr.operand).toNumber();
      system.incCounter();
    };

    return instr;
  }

  private getSubtract(instr: Instruction): Instruction {
    instr.execute = (system: System) => {
      system.accumulator -= system.memory.get(instr.operand).toNumber();
      system.incCounter();
    };

    return instr;
  }

  private getMultiply(instr: Instruction): Instruction {
    instr.execute = (system: System) => {
      system.accumulator *= system.memory.get(instr.operand).toNumber();
      system.incCounter();
    };

    return instr;
  }

  private getDivide(instr: Instruction): Instruction {
    instr.execute = (system: System) => {
      system.accumulator /= system.memory.get(instr.operand).toNumber();
      system.incCounter();
    };

    return instr;
  }

  private getBranch(instr: Instruction): Instruction {
    instr.execute = (system: System) => {
      system.branchCounter(instr.operand);
    };

    return instr;
  }

  private getBranchNeg(instr: Instruction): Instruction {
    instr.execute = (system: System) => {
      if (system.accumulator < 0) {
        system.branchCounter(instr.operand);
      } else {
        system.incCounter();
      }
    };

    return instr;
  }

  private getBranchZero(instr: Instruction): Instruction {
    instr.execute = (system: System) => {
      if (system.accumulator === 0) {
        system.branchCounter(instr.operand);
      } else {
        system.incCounter();
      }
    };

    return instr;
  }

  private getHalt(instr: Instruction): Instruction {
    instr.execute = (system: System) => {
      system.halt();
    };

    return instr;
  }
}
