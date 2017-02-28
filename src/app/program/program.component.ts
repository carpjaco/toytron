import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { System } from '../core/system.model';
import { CodeComponent } from '../code/code.component';
import { InstructionFactory } from '../core/instruction.factory';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  @ViewChild(CodeComponent) codeComponent: CodeComponent;
  @Input() private system: System;

  constructor(private instructionFactory: InstructionFactory) { }

  read(address: number): void {
    this.codeComponent.append(
      this.instructionFactory.getInstruction(20, address, true)
    );
  }

  write(address: number): void {
    this.codeComponent.append(
      this.instructionFactory.getInstruction(21, address, true)
    );
  }

  load(address: number): void {
    this.codeComponent.append(
      this.instructionFactory.getInstruction(30, address, true)
    );
  }

  store(address: number): void {
    this.codeComponent.append(
      this.instructionFactory.getInstruction(31, address, true)
    );
  }

  add(address: number): void {
    this.codeComponent.append(
      this.instructionFactory.getInstruction(40, address, true)
    );
  }

  subtr(address: number): void {
    this.codeComponent.append(
      this.instructionFactory.getInstruction(41, address, true)
    );
  }

  div(address: number): void {
    this.codeComponent.append(
      this.instructionFactory.getInstruction(42, address, true)
    );
  }

  mult(address: number): void {
    this.codeComponent.append(
      this.instructionFactory.getInstruction(43, address, true)
    );
  }

  branch(address: number): void {
    this.codeComponent.append(
      this.instructionFactory.getInstruction(50, address, true)
    );
  }

  brneg(address: number): void {
    this.codeComponent.append(
      this.instructionFactory.getInstruction(51, address, true)
    );
  }

  brzero(address: number): void {
    this.codeComponent.append(
      this.instructionFactory.getInstruction(5220, address, true)
    );
  }

  halt(): void {
    this.codeComponent.append(
      this.instructionFactory.getInstruction(53, undefined, true)
    );
  }

  ngOnInit() {
  }
}
