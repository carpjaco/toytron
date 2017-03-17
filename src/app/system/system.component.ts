import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { System } from '../core/system.model';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  @Input() private system: System;
  @Output() private installCode: EventEmitter<boolean> = new EventEmitter();
  private inputAlert: boolean;

  install(): void {
    this.installCode.emit(true);
  }

  readInput(event): void {
    if (event.keyCode === 13) {
      this.system.provideInput(+event.target.value);
      event.target.value = null;
    }
  }

  ngOnInit() { }
}
