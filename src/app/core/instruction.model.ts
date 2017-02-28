import { System } from './system.model';

export interface Instruction {
  operator: number;
  operand?: number;
  execute(system: System): void;
}
