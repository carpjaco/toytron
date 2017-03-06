export function leftPad(value: any, length: number, padChar: string): string {
  let str = value.toString();

  while (str.length < length) {
    str = padChar + str;
  }

  return str.length > length ? str : String(str).slice(str.length - length);
}
