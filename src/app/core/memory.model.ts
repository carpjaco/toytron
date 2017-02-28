export class Memory {
  private banks: number[][];
  private bankDimension = 10;

  constructor() {
    this.banks = this.emptyMemory();
  }

  get(row: number, column: number): number {
    return this.banks[row][column];
  }

  set(row: number, column: number, value: number): void {
    this.banks[row][column] = value;
  }

  getAll(): number[][] {
    return this.banks;
  }

  getDimension(): any[] {
    return Array.from(Array(this.bankDimension).keys()).map((x, i) => '0' + i);
  }

  private emptyMemory(): number[][] {
    const arr = new Array<Array<number>>(this.bankDimension);

    for (let i = 0; i < this.bankDimension; ++i) {
      arr[i] = new Array<number>(this.bankDimension).fill(0);
    }

    return arr;
  }
}
