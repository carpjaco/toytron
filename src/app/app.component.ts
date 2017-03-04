import { Component, ViewChild } from '@angular/core';
import { System } from './core/system.model';
import { Instruction } from './core/instruction.model';
import { CodeComponent } from './code/code.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private newCodeLine: Instruction;
  @ViewChild(CodeComponent) private codeComp: CodeComponent;

  constructor(private system: System) { }

  onCodeCreated(event): void { // TODO: Try making this private.
    this.codeComp.addLine(event);
  }
}
