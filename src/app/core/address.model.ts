import { Operation } from './operation.enum';

export interface Address {
  operator?: Operation;
  operand?: number;
}
