import { Address } from './address.model';

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
    if (!(value instanceof Address)) {
      const addr = new Address();
      addr.operand = value;
      value = addr;
    }

    this.banks[this.addressToRow(address)][this.addressToCol(address)] = value;
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
