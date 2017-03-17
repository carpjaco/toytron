import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Instruction } from '../core/instruction.model';
import { InstructionPipe } from '../core/instruction.pipe';
import { LeftPadPipe } from '../core/left-pad.pipe';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  private list: Instruction[];
  @Input() private activeLine: number;

  append(instruction: Instruction) {
    this.list.push(instruction);
  }

  getList(): Instruction[] {
    return this.list;
  }

  moveUp(index: number): void {
    this.list = this.swap(this.list, index, index - 1);
  }

  moveDown(index: number): void {
    this.list = this.swap(this.list, +index, +index + 1);
  }

  remove(index: number): void {
    this.list.splice(index, 1);
  }

  clear(): void {
    this.list = new Array<Instruction>();
  }

  isSelected(option?: number): boolean {
    return this.activeLine === option;
  }

  isEmpty(): boolean {
    return this.list ? this.list.length === 0 : true;
  }

  private swap(array: any[], a: number, b: number): any[] {
    try {
      if (a >= 0 && b >= 0 && a < array.length && b < array.length) {
        const newArr = array.slice();
        [newArr[a], newArr[b]] = [newArr[b], newArr[a]];
        return newArr;
      }
    } catch (err) { }

    return array;
  }

  ngOnInit() {
    this.clear();
  }
}
