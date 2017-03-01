import { System } from './system.model';
import { Operation } from './operation.enum';

export interface Instruction {
  operator: Operation;
  operand?: number;
  execute?: (system: System) => void;
}
