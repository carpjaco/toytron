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
    return this.banks[this.addressToRow(address)][this.addresstoCol(address)];
  }

  set(address: number, value: number): void {
    this.banks[this.addressToRow(address)][this.addresstoCol(address)] = {
      operator: 0,
      operand: value
    };
  }

  private addressToRow(address: number): number {
    return +address / this.bankDimension;
  }

  private addresstoCol(address: number): number {
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
      arr[i] = new Array<Address>(this.bankDimension).fill({
        operator: 0,
        operand: 0
      });
    }

    return arr;
  }
}
