import { Component, OnInit, Input } from '@angular/core';
import { System } from '../core/system.model';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  @Input() private system: System;

  constructor() { }

  ngOnInit() { }
}
