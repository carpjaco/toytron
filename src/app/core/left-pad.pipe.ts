import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'leftpad' })
export class LeftPadPipe implements PipeTransform {
  transform(value: any, length: number, character: string = ' ') {
    return this.leftPad(value.toString(), length, character);
  }

  private leftPad(value: any, length: number, padChar: string): string {
    let str = value.toString();

    while (str.length < length) {
      str = padChar + str;
    }

    return String(str).slice(str.length - length);
  }
}
