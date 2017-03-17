import { Memory } from './memory.model';
import { EventEmitter, Output } from '@angular/core';
import { Instruction } from './instruction.model';

export enum Status {
  Uninitialized,
  Initialized,
  Active,
  AwaitingInput,
  Halted
}

export class System {
  screen: number;
  accumulator: number;
  private prgCounter: number;
  private input: number;
  memory: Memory;
  private addressForInput: number;
  private status: Status;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.screen = null;
    this.accumulator = 0;
    this.prgCounter = 0;
    this.input = null;
    this.status = Status.Uninitialized;
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

  initialize(instructions: Instruction[]): void {
    if (this.status === Status.Uninitialized) {
      this.status = Status.Initialized;

      for (let i = 0; i < instructions.length; i++) {
        this.memory.set(i, instructions[i]);
      }
    }
  }

  requestInput(address: number): void {
    this.addressForInput = +address;
    this.status = Status.AwaitingInput;
  }

  provideInput(value: number): void {
    this.memory.set(this.addressForInput, +value);
    this.status = Status.Active;
    this.addressForInput = null;
    this.incCounter();
  }

  halt(): void {
    this.status = Status.Halted;
  }

  isAwaitingInput(): boolean {
    return this.status === Status.AwaitingInput;
  }

  isInitialized(): boolean {
    return this.status === Status.Initialized || this.status === Status.Active;
  }

  isFinished(): boolean {
    return this.status === Status.Halted;
  }

  step(): void {
    if (this.isInitialized()) {
      (<Instruction>this.memory.get(this.prgCounter)).execute(this);
    }
  }

  run(): void {
    if (this.isInitialized()) {
      setInterval(() => {
        this.step();
      }, 2000);
    }
  }
}
