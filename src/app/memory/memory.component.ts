import { Component, OnInit, Input } from '@angular/core';
import { Instruction } from '../core/instruction.model';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {
  @Input() private data: Instruction[][];
  @Input() private dimension: any[];

  constructor() { }

  ngOnInit() { }
}
