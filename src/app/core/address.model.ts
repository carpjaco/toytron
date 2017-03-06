import { Operation } from './operation.enum';
import { leftPad } from './leftpad';

export interface IAddress {
  operator?: Operation;
  operand?: number;
  toNumber: () => number;
}

export class Address implements IAddress {
  operator?: Operation;
  operand?: number;

  constructor() {
    this.operator = 0;
    this.operand = 0;
  }

  toNumber(): number {
    const operator = leftPad(this.operator, 2, '0');
    const operand = leftPad(this.operand, 2, '0');
    const str = `${operator}${operand}`;

    return +str;
  }
}
