import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { System } from '../core/system.model';
import { CodeComponent } from '../code/code.component';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  @ViewChild(CodeComponent) codeComponent: CodeComponent;
  @Input() private system: System;

  constructor() { }

  read(address: number): void {
    this.codeComponent.append({
      operator: 20,
      operand: address,
      execute: function (system: System): void {
        system.requestInput(address);
      }
    });
  }

  write(address: number): void {
    this.codeComponent.append({
      operator: 21,
      operand: address,
      execute: function (system: System): void {
        system.screen = system.memory.get(address).operand;
        system.incCounter();
      }
    });
  }

  load(address: number): void {
    this.codeComponent.append({
      operator: 30,
      operand: address,
      execute: function (system: System): void {
        system.accumulator = system.memory.get(address).operand;
        system.incCounter();
      }
    });
  }

  store(address: number): void {
    this.codeComponent.append({
      operator: 31,
      operand: address,
      execute: function (system: System): void {
        system.memory.set(address, system.accumulator);
      }
    });
  }

  add(address: number): void {
    this.codeComponent.append({
      operator: 40,
      operand: address,
      execute: function (system: System): void {
        system.accumulator += system.memory.get(address).operand;
        system.incCounter();
      }
    });
  }

  subtr(address: number): void {
    this.codeComponent.append({
      operator: 41,
      operand: address,
      execute: function (system: System): void {
        system.accumulator -= system.memory.get(address).operand;
        system.incCounter();
      }
    });
  }

  div(address: number): void {
    this.codeComponent.append({
      operator: 42,
      operand: address,
      execute: function (system: System): void {
        system.accumulator /= system.memory.get(address).operand;
        system.incCounter();
      }
    });
  }

  mult(address: number): void {
    this.codeComponent.append({
      operator: 43,
      operand: address,
      execute: function (system: System): void {
        system.accumulator *= system.memory.get(address).operand;
        system.incCounter();
      }
    });
  }

  branch(address: number): void {
    this.codeComponent.append({
      operator: 50,
      operand: address,
      execute: function (system: System): void {
        system.branchCounter(address);
      }
    });
  }

  brneg(address: number): void {
    this.codeComponent.append({
      operator: 51,
      operand: address,
      execute: function (system: System): void {
        if (system.accumulator < 0) {
          system.branchCounter(address);
        } else {
          system.incCounter();
        }
      }
    });
  }

  brzero(address: number): void {
    this.codeComponent.append({
      operator: 52,
      operand: address,
      execute: function (system: System): void {
        if (system.accumulator === 0) {
          system.branchCounter(address);
        } else {
          system.incCounter();
        }
      }
    });
  }

  halt(): void {
    this.codeComponent.append({
      operator: 53,
      execute: function(system: System): void {
        system.pause();
      }
    });
  }

  ngOnInit() {
  }
}
