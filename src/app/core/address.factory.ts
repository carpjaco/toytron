import { Injectable } from '@angular/core';
import { Address } from './address.model';

@Injectable()
export class AddressFactory {
  create(operator: number, operand: number): Address {
    return {
      operator: operator,
      operand: operand
    };
  }
}
