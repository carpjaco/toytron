import { Memory } from './memory.model';
import { EventEmitter } from '@angular/core';

export class System {
  screen: number;
  accumulator: number;
  private prgCounter: number;
  private input: number;
  memory: Memory;
  private isActive: boolean;
  inputEmitter: EventEmitter<boolean>;

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
    this.pause();
  }

  step(): void {
    this.memory.get(this.prgCounter).execute(this);
  }
}
