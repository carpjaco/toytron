import { Memory } from './memory.model';
import { EventEmitter, Output } from '@angular/core';
import { Instruction } from './instruction.model';

export class System {
  screen: number;
  accumulator: number;
  private prgCounter: number;
  private input: number;
  memory: Memory;
  private isActive: boolean;
  private inputRequired: boolean;
  private addressForInput: number;

  constructor() {
    this.screen = null;
    this.accumulator = 0;
    this.prgCounter = 0;
    this.input = null;
    this.isActive = false;
    this.memory = new Memory();
  }

  incCounter(): void {
    this.prgCounter++;
  }

  branchCounter(address: number): void {
    this.prgCounter = address;
  }

  getCounter(): number {
    return this.prgCounter;
  }

  activate(): void {
    this.isActive = true;
  }

  pause(): void {
    this.isActive = false;
  }

  requestInput(address: number): void {
    this.addressForInput = +address;
    this.inputRequired = true;
  }

   isInputRequested(): boolean {
    return this.inputRequired;
  }

  provideInput(value: number): void {
    this.memory.set(this.addressForInput, +value);
    this.inputRequired = false;
    this.addressForInput = null;
    this.incCounter();
  }

  install(instructions: Instruction[]) {
    for (let i = 0; i < instructions.length; i++) {
      this.memory.set(i, instructions[i]);
    }
  }

  step(): void {
    (<Instruction>this.memory.get(this.prgCounter)).execute(this);
  }

  run(): void {
    setTimeout(() => {
      this.step();
    }, 2000);
  }
}
