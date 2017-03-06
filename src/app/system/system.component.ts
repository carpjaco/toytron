import { Component, OnInit, Input, Output } from '@angular/core';
import { System } from '../core/system.model';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  @Input() private system: System;
  private inputAlert: boolean;

  constructor() { }

  run(): void {
    this.system.run();
  }

  step(): void {
    this.system.step();
  }

  setInput(field: HTMLInputElement): void {
    this.system.provideInput(+field.value);
    field.value = null;
  }

  ngOnInit() { }
}
