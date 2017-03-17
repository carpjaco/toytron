import { Address } from './address.model';
import { AddressFactory } from './address.factory';

export class Memory {
  private banks: Address[][];
  private bankDimension = 10;

  constructor() {
    this.banks = this.emptyMemory();
  }

  private getAddress(row: number, column: number): number {
    return row * this.bankDimension + column;
  }

  get(address: number): Address {
    return this.banks[this.addressToRow(address)][this.addressToCol(address)];
  }

  set(address: number, value: any): void {
    if (value instanceof Address) {
      this.banks[this.addressToRow(address)][this.addressToCol(address)] = value;
    } else {
      const addr = new Address();
      addr.operator = Math.floor(Math.abs(+value / 100));
      addr.operand = Math.abs(+value % 100);
      this.banks[this.addressToRow(address)][this.addressToCol(address)] = addr;
    }
  }

  private addressToRow(address: number): number {
    return Math.floor(+address / this.bankDimension);
  }

  private addressToCol(address: number): number {
    return +address % this.bankDimension;
  }

  getAll(): Address[][] {
    return this.banks;
  }

  getDimension(): any[] {
    return Array.from(Array(this.bankDimension).keys()).map((x, i) => '0' + i);
  }

  private emptyMemory(): Address[][] {
    const arr = new Array<Array<Address>>(this.bankDimension);

    for (let i = 0; i < this.bankDimension; ++i) {
      const addr = new Address();
      addr.operand = 0;
      arr[i] = new Array<Address>(this.bankDimension).fill(addr);
    }

    return arr;
  }
}
