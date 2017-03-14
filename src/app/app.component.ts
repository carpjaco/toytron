import { Component, ViewChild } from '@angular/core';
import { System } from './core/system.model';
import { Instruction } from './core/instruction.model';
import { CodeComponent } from './code/code.component';
import { SystemComponent } from './system/system.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private newCodeLine: Instruction;
  @ViewChild(CodeComponent) private codeComp: CodeComponent;
  @ViewChild(SystemComponent) private systemComp: SystemComponent;

  constructor(private system: System) { }

  private onInstallCode(event): void {
    if (event) {
      this.system.install(this.codeComp.getList());
    }
  }

  private onCodeCreated(event): void {
    this.codeComp.append(event);
  }
}
