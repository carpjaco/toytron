import { Injectable } from '@angular/core';
import { Address } from './address.model';

@Injectable()
export class AddressFactory {
  create(operator: number, operand: number): Address {
    const addr = new Address();
    addr.operator = operator;
    addr.operand = operand;

    return addr;
  }
}
