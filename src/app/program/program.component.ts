import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { System } from '../core/system.model';
import { CodeComponent } from '../code/code.component';
import { InstructionFactory } from '../core/instruction.factory';
import { Operation } from '../core/operation.enum';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  @ViewChild(CodeComponent) codeComp: CodeComponent;

  constructor(private instrFactory: InstructionFactory) { }

  create(event: any, operandField: HTMLInputElement): void {
    if (event.type !== 'click' || operandField.value === undefined) { return; }

    const operation = +Operation[event.target.innerText];
    const operand = +operandField.value;

    this.codeComp.append(this.instrFactory.create(operation, operand));
  }

  ngOnInit() { }
}
