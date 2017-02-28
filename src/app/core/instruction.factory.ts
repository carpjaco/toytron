import { Injectable, OnInit } from '@angular/core';
import { Instruction } from './instruction.model';
import { System } from './system.model';
;
@Injectable()
export class InstructionFactory implements OnInit {
  getInstruction(
    operator: number,
    address: number,
    withExecute?: boolean
  ): Instruction {
    const instr = { operator: operator, operand: address, execute: undefined };

    if (withExecute) {
      instr.execute = this.getExecute(instr.operator, instr.operand);
    }

    return instr;
  }

  private getExecute(operator: number, address: number): Function {
    switch (operator) {
      case 20:
        return function (system: System) {
          system.requestInput(address);
        };
      case 21:
        return function (system: System): void {
          system.screen = system.memory.get(address).operand;
          system.incCounter();
        };
      case 30:
        return function (system: System): void {
          system.accumulator = system.memory.get(address).operand;
          system.incCounter();
        };
      case 31:
        return function (system: System): void {
          system.memory.set(address, system.accumulator);
        };
      case 40:
        return function (system: System): void {
          system.accumulator += system.memory.get(address).operand;
          system.incCounter();
        };
      case 41:
        return function (system: System): void {
          system.accumulator -= system.memory.get(address).operand;
          system.incCounter();
        };
      case 42:
        return function (system: System): void {
          system.accumulator /= system.memory.get(address).operand;
          system.incCounter();
        };
      case 43:
        return function (system: System): void {
          system.accumulator *= system.memory.get(address).operand;
          system.incCounter();
        };
      case 50:
        return function (system: System): void {
          system.branchCounter(address);
        };
      case 51:
        return function (system: System): void {
          if (system.accumulator < 0) {
            system.branchCounter(address);
          } else {
            system.incCounter();
          }
        };
      case 52:
        return function (system: System): void {
          if (system.accumulator === 0) {
            system.branchCounter(address);
          } else {
            system.incCounter();
          }
        };
      case 53:
        return function (system: System): void {
          system.pause();
        };
    }
  }
  ngOnInit() { }
}
