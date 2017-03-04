import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { System } from '../core/system.model';
import { InstructionFactory } from '../core/instruction.factory';
import { Operation } from '../core/operation.enum';
import { Instruction } from '../core/instruction.model';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  @Output() codeCreated: EventEmitter<Instruction> = new EventEmitter();

  constructor(private instrFactory: InstructionFactory) { }

  create(event: any, operandField: HTMLInputElement): void {
    if (event.type !== 'click' || operandField.value === undefined) { return; }

    const operation = +Operation[event.target.innerText];
    const operand = +operandField.value;

    this.codeCreated.emit(this.instrFactory.create(operation, operand));
  }

  ngOnInit() { }
}
