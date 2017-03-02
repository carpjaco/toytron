import { PipeTransform, Pipe } from '@angular/core';

import { Address } from './address.model';

@Pipe({ name: 'address' })
export class AddressPipe implements PipeTransform {
  transform(value: Address, ...args: any[]) {
    const opcode = this.leftPad(value.operator, '0', 2);
    const operand = this.leftPad(value.operand, '0', 2);

    return `${opcode}${operand}`;
  }

  private leftPad(value: any, padChar: string, length: number): string {
    let str = value.toString();

    while (str.length < length) {
      str = padChar + str;
    }

    return String(str).slice(str.length - length);
  }
}
