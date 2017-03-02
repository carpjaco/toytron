import { System } from './system.model';
import { Address } from './address.model';

export interface Instruction extends Address {
  execute?: (system: System) => void;
}
