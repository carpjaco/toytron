import { PipeTransform, Pipe } from '@angular/core';
import { leftPad } from './leftpad';

@Pipe({ name: 'leftpad' })
export class LeftPadPipe implements PipeTransform {
  transform(value: any, length: number, character: string = ' ') {
    return leftPad(value.toString(), length, character);
  }
}
