import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {
  @Input() private data: number[][];
  @Input() private dimension: any[];

  constructor() { }

  ngOnInit() { }
}
