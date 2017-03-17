import { PipeTransform, Pipe } from '@angular/core';

import { Address } from './address.model';
import { leftPad } from './leftpad';

@Pipe({ name: 'address' })
export class AddressPipe implements PipeTransform {
  transform(value: Address, ...args: any[]) {
    const opcode = leftPad(value.operator, 2, '0');
    const operand = leftPad(value.operand, 2, '0');

    return `${opcode}${operand}`;
  }
}
